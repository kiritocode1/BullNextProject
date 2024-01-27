import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { FC } from 'react'
import { FaWhatsapp } from 'react-icons/fa';

interface LinkButtonComponentProps {
  
}

const LinkButtonComponent: FC<LinkButtonComponentProps> = ({}) => {
	return (
	  <Link href="https://chat.whatsapp.com/HLpcj367iBs5NcYgk2y07y" target='_blank'>
		<Button color="success" className="text-white" size="lg" variant="shadow">
			<FaWhatsapp className="text-2xl" />
			JOIN OUR WHATSAPP GROUP
			</Button>
	</Link>
	);
}

export default LinkButtonComponent
