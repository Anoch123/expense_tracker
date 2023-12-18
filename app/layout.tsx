import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CashFlowMate - Achieve Financial Wellness & Transform Your Spending Habits, Transform Your Life.',
  description: 'Effortlessly manage your finances and gain full control over your spending with our intuitive Expense Tracker. Seamlessly track, categorize, and analyze your expenses in real-time, empowering you to make informed financial decisions. Take charge of your budget, maximize savings, and embark on a journey towards financial well-being. Experience simplicity, precision, and financial clarity – because your money deserves the best care.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
