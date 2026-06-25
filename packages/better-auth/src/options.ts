import { BetterAuthOptions } from "better-auth";
import { phoneNumber } from "better-auth/plugins";

export const options: BetterAuthOptions = {
    // plugins: [
    //     phoneNumber({
    //         sendOTP: ({ phoneNumber, code }, ctx) => {
    //             // Implement the sending code logic
    //         },
    //         signUpOnVerification: {
    //             getTempEmail: (phoneNumber) => {
    //                 return `${phoneNumber}@yuvly.com`;
    //             },
    //             getTempName: (phoneNumber) => {
    //                 return phoneNumber
    //             }
    //         }
    //     })
    // ]

    socialProviders: {
        google: {
            clientId: "",
            clientSecret: "",
        }
    }
};