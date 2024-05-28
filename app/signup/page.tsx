"use client"

import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function SignupPage(){
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <RegisterLink className="bg-sky-400 p-4 rounded-md">Sign up</RegisterLink>
            
        </div>
    )
}