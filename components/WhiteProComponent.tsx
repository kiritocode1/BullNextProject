"use client";
import Image from "next/image";
import { FC } from "react";
import hehe from "../app/assets/whitepartImage.jpg";
import LinkButtonComponent from "./LinkButtonComponent";
import { Roboto } from "next/font/google";
import { CircularProgress } from "@nextui-org/progress";
import React from "react";
import { Button } from "@nextui-org/button";
import { FaWhatsapp } from "react-icons/fa";
const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	style: "italic",
});

interface WhiteProComponentProps {}

const WhiteProComponent: FC<WhiteProComponentProps> = ({}) => {
	const [value, setValue] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setValue((v) => (v >= 100 ? 0 : v + 10));
		}, 300);

		return () => clearInterval(interval);
	}, []);

	return (
		<main className=" bg-white min-w-full flex justify-evenly p-20 flex-wrap sm:gap-x-20">
			<div className="flex flex-col gap-2">
				<div className={"text-2xl font-extrabold" + roboto.className}>
					Trade like a pro.
				</div>
				<Image src={hehe} alt="hehe" width={350} />
			</div>
			<div className="flex flex-col pt-40 items-center">
				<CircularProgress
					aria-label="Loading..."
					size="md"
					value={value}
					color="success"
					showValueLabel={true}
					label="ACCURACY"
				/>

				<div className={"text-3xl font-serif font-extrabold  w-full"}>
					Do you want to make <br /> Daily Profits?
				</div>

				<div className="my-2">
					If Yes, Then our telegram channel is right fit for you. We will Help{" "}
					<br />
					you Achieve that with our 24X7 <br /> Support and guidance.
				</div>
				<div className="my-2 font-bold">
					Get daily Options Trades with 95% Accuracy
				</div>

				<LinkButtonComponent />
			</div>
		</main>
	);
};

export default WhiteProComponent;
