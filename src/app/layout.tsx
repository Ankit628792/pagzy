import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Pagzy AI",
    description: "Zero code, maximum speed. Make professional sites easy, fast and fun while delivering best-in-class SEO, performance.",
    keywords: ["nextjs", "tailwindcss", "typescript", "pagzy", "ai"],

};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href={"/icons/favicon.ico"} />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    font.className
                )}
            >
                {children}
            </body>
        </html>
    );
};
