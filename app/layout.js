// import { Inter } from "next/font/google";
import { Epilogue } from "next/font/google";
// import "./globals.css";
import "./scss/globle.scss";
// const inter = Inter({ subsets: ["latin"] });


const epilogue = Epilogue({
  weight:["200","300","400","500","600","700","800","900"],
  subsets: ['latin'],
  display: "swap",
  variable: "--font-epilogue"
})

export const metadata = {
  title: "Agency Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        {children}
      </body>
    </html>
  );
}