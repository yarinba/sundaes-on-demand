import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';

import ScoopOption from './ScoopOption';
import ToppingOption from './ToopingOption';
import AlertBanner from '../common/AlertBanner';

export interface ItemComponentProps {
	name: string;
	imagePath: string;
}

const Options = ({ optionType }: { optionType: 'scoops' | 'toppings' }) => {
	const [items, setItems] = useState<ItemComponentProps[]>([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((res) => setItems(res.data))
			.catch((err) => setError(true));
	}, [optionType]);

	if (error) return <AlertBanner />;

	const ItemComponent: React.FC<ItemComponentProps> = optionType === 'scoops' ? ScoopOption : ToppingOption;

	const optionItems = items.map((item) => (
		<ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
	));
	return <Row>{optionItems}</Row>;
};

export default Options;
