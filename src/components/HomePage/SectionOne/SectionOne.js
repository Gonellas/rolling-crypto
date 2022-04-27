import { Container, Col, Row } from "react-bootstrap";

const SectionOne = () => {
  return (
    <section className="home-container">
      <Container className="so-style back-img">
        <Row>
          <Col xs={12} md={12} lg={12} className="d-flex justify-content-center">
            <h1 className="logo-title text-focus-in text-center">
              Rolling Crypto
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} className="d-flex justify-content-center">
            <h4 className="subtitle">Most used Cryptos whith Covalent's API</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionOne;
