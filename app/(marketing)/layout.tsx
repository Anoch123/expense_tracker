import { RedirectToSignIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout ({
    children
} : {
    children: React.ReactNode
}) {
    const { userId } = auth();

    if(!userId) {
        <RedirectToSignIn />
    }

    if(userId) {
        redirect(`/${userId}`);
    }

    return (
        <>{children}</>
    )
}