import Header from "@/components/navbar/header";
import HeaderMobile from "@/components/navbar/header-mobile";
import MarginWidthWrapper from "@/components/navbar/margin-width-wrapper";
import PageWrapper from "@/components/navbar/page-wrapper";
import SideNav from "@/components/navbar/side-nav";

import { RedirectToSignIn, auth } from "@clerk/nextjs";

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
        <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </>
    )
}