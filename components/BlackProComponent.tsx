import { FC } from "react";
import one from "../app/assets/carousel_images/1.jpg";
import two from "../app/assets/carousel_images/2.jpg";
import three from "../app/assets/carousel_images/3.jpg";
import four from "../app/assets/carousel_images/4.jpg";
import five from "../app/assets/carousel_images/5.jpg";
import six from "../app/assets/carousel_images/6.png";
import seven from "../app/assets/carousel_images/7.png"; 
import eight from "../app/assets/carousel_images/8.jpg"
import Image from "next/image";

import LinkButtonComponent from "./LinkButtonComponent";
const ImageCarousel = () => {
	return (
		<div className="flex flex-wrap justify-center items-center gap-4">
			<Image src={one} alt="one" className="lg:w-40" />
			<Image src={two} alt="two" className="lg:w-40" />
			<Image src={three} alt="three" className="lg:w-40" />
			<Image src={four} alt="four" className="lg:w-40" />
			<Image src={five} alt="five" className="lg:w-40" />
			<Image src={six} alt="six" className="lg:w-40" />
			<Image src={seven} alt="seven" className="lg:w-40" />
			<Image src={eight} alt="eight" className="lg:w-40" />
		</div>
	);
};

interface BlackProComponentProps {}

const BlackProComponent: FC<BlackProComponentProps> = ({}) => {
	return (
		<div>
			<div className="flex text-white min-w-full h-60 flex-col justify-center items-center">
				<div className="w-full text-center font-serif lg:text-5xl text-xl">
					OUR WHATSAPP GROUP MEMBERS PROFITS
				</div>
			</div>

			<ImageCarousel />
			<div className="w-full mt-20 flex items-center justify-center">
				<LinkButtonComponent />
			</div>
		</div>
	);
};

export default BlackProComponent;
