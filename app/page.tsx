import { Link } from "@nextui-org/link";

import bg from "./assets/bg-image.jpg";

import CardMain from "@/components/CardMain";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { FaWhatsapp } from "react-icons/fa";
import WhiteProComponent from "@/components/WhiteProComponent";
import BlackProComponent from "@/components/BlackProComponent";
import LinkButtonComponent from "@/components/LinkButtonComponent";

export default function Home() {
	return (
		<div className="bg-black">
			<main className="flex flex-col relative bg-black">
				<Image src={bg} alt="hello" className="object-cover" />
				<div className="absolute flex items-center justify-center w-full lg:pt-10 lg:px-20 pt-2 px-2 z-10">
					<CardMain />
				</div>

				<div className="w-full mt-40 lg:mt-0 bg-black flex flex-col items-center py-12  gap-6">
					<div className="text-slate-300 text-sm">
						TRADE LIKE PROFESSIONAL TRADERS
					</div>
					<div className="text-slate-100 text-5xl font-semibold">
						{" "}
						JOIN OUR WHATSAPP GROUP.
					</div>
					<div className="text-slate-300 text-sm">
						Trade in Nifty and Banknifty Options and make consistent profits.
					</div>
					<LinkButtonComponent />
				</div>
				<div>
					<WhiteProComponent />
				</div>

				<div>
					<BlackProComponent />
				</div>
			</main>
			<footer className="bg-black text-white mt-20  w-full text-center h-9 font-mono">
				©2023 thebullsparadise.in All rights reserved. Privacy Policy
			</footer>
		</div>
	);
}
