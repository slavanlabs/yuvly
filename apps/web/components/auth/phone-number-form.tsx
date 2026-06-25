"use client"

import { COUNTRIES } from "@/lib/countries"
import { ChangeEvent, useState } from "react"
import { ChevronsUpDown } from "lucide-react"
import { FlagIcon } from "@/components/flag-icon"
import { Input } from "@workspace/ui/components/input"
import { YuvlyMascot } from "@/components/yuvly-mascot"
import { Button } from "@workspace/ui/components/button"
import examples from "libphonenumber-js/mobile/examples"
import parsePhoneNumberFromString, { AsYouType, CountryCode, getExampleNumber, isValidNumber } from "libphonenumber-js"

const getPlaceholder = (countryCode: string): string => {
  try {
    const example = getExampleNumber(countryCode as CountryCode, examples)
    return example?.formatNational() ?? "000 000 0000"
  } catch {
    return "000 000 0000"
  }
}

export function PhoneNumberForm() {
  const [phonenumber, setPhonenumber] = useState<string>("")
  const [selected, setSelected] = useState<string>("IN")

  const isValid = parsePhoneNumberFromString(phonenumber, selected as CountryCode)?.isValid() ?? false

  const handlePhonenumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const formatter = new AsYouType(selected as CountryCode)

    const digits = raw.replace(/\D/g, "")
    let formatted = ""
    for (const digit of digits) {
      formatted = formatter.input(digit)
    }
    setPhonenumber(formatted)
  }

  const handleSubmit = () => {
    

  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex min-w-[400px] flex-col gap-1.5">
        <YuvlyMascot size={70} />
        <h1 className="text-3xl leading-7 font-medium tracking-tighter">
          Welcome to Yuvly
        </h1>
        <h2 className="text-3xl tracking-tighter text-muted-foreground">
          What's your phone number?
        </h2>

        <div className="mt-12 flex w-full items-center gap-4 rounded-3xl bg-muted px-3 py-4">
          <div className="relative">
            <div className="flex items-center gap-2">
              <ChevronsUpDown size={16} />
              <FlagIcon countryCode={selected.toLowerCase()} size="lg" />
            </div>

            <select
              value={selected}
              onChange={(e) => {
                setSelected(e.target.value)
                setPhonenumber("")
              }}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            >
              {COUNTRIES.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <Input
            type="tel"
            value={phonenumber}
            onChange={handlePhonenumberChange}
            className="flex-1 border-none bg-transparent! font-mono text-[16.5px]! outline-none! focus:ring-0!"
            placeholder={getPlaceholder(selected)}
          />
        </div>
        <Button
          size={"lg"}
          disabled={!isValid}
          onClick={handleSubmit}
          className="mt-5 w-full rounded-2xl py-6 text-[16.5px] font-medium hover:bg-white/80"
        >
          Continue with phone
        </Button>
      </div>
    </div>
  )
}