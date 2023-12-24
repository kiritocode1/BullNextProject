import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { FC } from 'react'
import { Button } from "@nextui-org/button";
import { FaWhatsapp } from "react-icons/fa";

import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { Roboto } from "next/font/google";
const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	style: "italic",
});
import logo from "../app/assets/logo.png";
import Image from "next/image";
import LinkButtonComponent from './LinkButtonComponent';

interface CardMainProps {
  
}

const CardMain: FC<CardMainProps> = ({}) => {
    return (
			<Card fullWidth isHoverable >
				<CardHeader className="flex justify-center">
					<Image
						src={logo}
						alt="image logo"
						className="w-20 h-20 rounded-full overflow-clip "
					/>
				</CardHeader>
				<Divider />
				<CardBody>
					<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
						<div className="text-center font-bold text-green-900 text-italic">
							✅ 90-95% ACCURACY CONSISTENTLY
						</div>

						<div
							className={
								roboto.className + "text-3xl max-w-lg text-clip text-center"
							}>
							ARE YOU FED UP WITH YOUR DAILY LOSSES ? SO {"DON'T"} WORRY HERE IS
							THE SOLUTION . WE BRING YOU {"BULL'S PARADISE"} <br /> WHATSAPP
							GROUP FOR YOU .
						</div>
					</section>

					<div className="flex md:px-[9.0rem] ">
						✔️ WHATSAPP GROUP DETAILS <br />
						✔️ 90-95% accuracy <br />
						✔️ Min Capital required 8k-10k.
						<br />
						✔️ 3-4 calls daily
					</div>

				<div className=" flex items-center justify-center w-full">
					<LinkButtonComponent/>
					</div>
				</CardBody>
			</Card>
		);
}

export default CardMain