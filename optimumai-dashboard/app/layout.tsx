import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Sidebar from "./components/Dashboard/Sidebar";
import TopNavbar from "./components/Dashboard/TopNavbar";
import "./globals.css";
import Providers from "@/components/Providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OptimumAI Lab",
  description: "OptimumAI Lab is a platform for Interview Preparation",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* className={inter.className} */}
      <body>
        <Providers>
        <div>
          <TopNavbar />
          <div>
            <div>
              <Sidebar />
            </div>
            <div className="contents-here">{props.children}</div>
          </div>
        </div>
        </Providers>
      </body>
    </html>
  );
}
