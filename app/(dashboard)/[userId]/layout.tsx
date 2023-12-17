import { RedirectToSignIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: { storeid: string }
}) {
    const { userId } = auth();

    if(!userId) {
        <RedirectToSignIn />
    }

    return (
        <>
            {children}
        </>
    )
}