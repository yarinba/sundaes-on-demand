import Col from "react-bootstrap/Col";

import { ItemComponentProps } from "./Options";

const ScoopOption = ({ name, imagePath }: ItemComponentProps) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        alt={`${name} scoop`}
        src={`http://localhost:3030/${imagePath}`}
        style={{ width: "75%" }}
      />
    </Col>
  );
};

export default ScoopOption;
