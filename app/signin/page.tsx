"use client"

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function SigninPage(){
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <LoginLink className="bg-sky-400 p-4 rounded-md" postLoginRedirectURL="/dashboard">Sign in</LoginLink>
            <LogoutLink>Log out</LogoutLink>

            
        </div>
    )
}