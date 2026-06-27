import { tool } from "ai";
import { z } from "zod";

/**
* searchAccomodationsTool - lets you search the hotel deals

*/

export const searchAccomodationsTool = tool({
    description: "This tool lets you find hotel deals in the area mentioned",

    inputSchema: z.object({
        destination: z.string().describe("City or address to search nearby"),
        checkIn: z.string().describe("ISO date string"),
        checkOut: z.string().describe("ISO date string"),
        guests: z.number().int().min(1).default(1),
        filters: z.object({
            maxBudgetPerNight: z.number().describe("maximum budget per night the user wants to spend").optional(),
            currency: z.string().describe("Currency according to user wants to pay in").default("INR"),
            petFriendly: z.boolean().optional(),
            amenities: z.array(z.string()).optional(),
            proximityKm: z.number().optional(),
        }).optional()
    }),
    execute: async ({ destination, checkIn, checkOut, guests, filters }) => {
        if(!destination) {
            throw new Error("Please provide city to search nearby")
        }
        

    }

})