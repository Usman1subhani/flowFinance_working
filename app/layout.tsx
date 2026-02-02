import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import MainLayout from "./src/layout/MainLayout";
import { AccountProvider } from "./src/context/AccountContext";
import { CategoryProvider } from "./src/context/CategoryContext";
import { TransactionProvider } from "./src/context/TransactionContext";
import { BudgetProvider } from "./src/context/BudgetContext";
import { HistoryProvider } from "./src/context/HistoryContext";
import { InvestmentProvider } from "./src/context/InvestmentContext";
import { UserProvider } from './src/context/UserContext';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
        className={`${outfit.variable} antialiased font-sans`}
      >
        <UserProvider>
          <HistoryProvider>
            <InvestmentProvider>
              <BudgetProvider>
                <TransactionProvider>
                  <CategoryProvider>
                    <AccountProvider>
                      <MainLayout>
                        {children}
                      </MainLayout>
                    </AccountProvider>
                  </CategoryProvider>
                </TransactionProvider>
              </BudgetProvider>
            </InvestmentProvider>
          </HistoryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
