import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';

import ScoopOption, { ItemComponentProps } from './ScoopOption';

const Options = ({ optionType }: { optionType: 'scoops' | 'toppings' }) => {
  const [items, setItems] = useState<ItemComponentProps[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => {});
  }, [optionType]);

  const ItemComponent: React.FC<ItemComponentProps> = optionType === 'scoops' ? ScoopOption : ScoopOption;
  const optionItems = items.map((item) => (
    <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
  ));
  return <Row>{optionItems}</Row>;
};

export default Options;
