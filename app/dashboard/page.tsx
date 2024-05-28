
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";
export default async function DshboardPage(){
    const {getUser}=getKindeServerSession()

    const user=await getUser();
    if(!user) return redirect("/signin")
    return(
       
        <h1>
            <p>Hi {user.given_name}!</p> <br></br>
           {user.family_name} <br></br>
           {user.email}
        </h1>
    );
};