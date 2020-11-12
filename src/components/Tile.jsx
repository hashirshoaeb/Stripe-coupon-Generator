import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";

const Tile = ({ data, handleDelete }) => {
  return (
    <Card>
      <Card.Header>
        <Container>
          <Row>
            <Accordion.Toggle as={Col} md={8} eventKey={data.id}>
              <p className="lead">{data.name}</p>
            </Accordion.Toggle>
            <Col md={4} className="btn btn-danger" onClick={handleDelete}>
              Delete
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Accordion.Collapse eventKey={data.id}>
        <Card.Body>
          <Row>
            {data.id && <Col md={6}>ID: {data.id}</Col>}
            {data.duration && <Col md={6}>Duration: {data.duration}</Col>}
            {data.percent_off && (
              <Col md={6}>Percent Off: {data.percent_off}%</Col>
            )}
            {data.currency && <Col md={6}>Currency: {data.currency}</Col>}
            {data.amount_off && <Col md={6}>Amount Off: {data.amount_off}</Col>}
            {data.duration_in_months && (
              <Col md={6}>Duration in months: {data.duration_in_months}</Col>
            )}
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Tile;
