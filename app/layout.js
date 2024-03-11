import {Inter, Expletus_Sans, Epilogue} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});
const expletus = Expletus_Sans({
  subsets: ["latin"],
});
const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});
// * meta data
export const metadata = {
  title: "Meal Buddy",
  description: "Create custom personalised meals that suits your lifestyle.",
};

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      className={`${expletus.className} ${epilogue.variable} ${inter.className}`}
    >
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
