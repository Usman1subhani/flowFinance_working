import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./src/layout/MainLayout";
import { AccountProvider } from "./src/context/AccountContext";
import { CategoryProvider } from "./src/context/CategoryContext";
import { TransactionProvider } from "./src/context/TransactionContext";
import { BudgetProvider } from "./src/context/BudgetContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinanceFlow",
  description: "Smart Money Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <AccountProvider>
          <CategoryProvider>
            <TransactionProvider>
              <BudgetProvider>
                <MainLayout>
                  {children}
                </MainLayout>
              </BudgetProvider>
            </TransactionProvider>
          </CategoryProvider>
        </AccountProvider>
      </body>
    </html>
  );
}
