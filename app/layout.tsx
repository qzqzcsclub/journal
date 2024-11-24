import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Nav from "@/components/nav";

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const robotoSlab = localFont({
	src: [
		{ path: "./fonts/RobotoSlab-Regular.ttf", weight: "400" },
		{ path: "./fonts/RobotoSlab-SemiBold.ttf", weight: "600" },
		{ path: "./fonts/RobotoSlab-Bold.ttf", weight: "700" },
		{ path: "./fonts/RobotoSlab-ExtraBold.ttf", weight: "900" },
	],
	variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
	title: "CSC Journal",
	description: "The Official Journal of Quanzhou 7th Middle School Cyber Security Club.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${robotoSlab.variable} ${geistMono.variable} antialiased`}>
				<Nav />

				<div className="mx-[430px] max-2xl:mx-[340px] max-xl:mx-[250px] max-lg:mx-[130px] max-md:mx-[40px] max-mx-[40px]">
					{children}
				</div>
			</body>
		</html>
	);
}
