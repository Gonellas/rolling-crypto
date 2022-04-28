import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./CryptoDetail.css";

const CryptoDetail = ({ contract_name }) => {
  const params = useParams();
  const [datos, setDatos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.covalenthq.com/v1/pricing/volatility/?quote-currency=USD&format=JSON&tickers=${params.id}&key=ckey_1c4049de4f7342d691c6d5eb431`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.items);
        setLoading(false);
        const cryptoData = data.data.items.filter(
          (element) => element.contract_name
        );
        setDatos(cryptoData);
      });
  }, [params.id]);

  return (
    <div className="detail-style">
      <Container fluid className="coin-container">
        {loading ? (
          "Cargando"
        ) : datos.length === 0 ? (
          <h3>No hay información</h3>
        ) : (
          datos.map((element, index) => {
            return (
              <>
                <Row className="row1">
                  <Col key={index} className="coin-name">
                    {element.contract_ticker_symbol} - {element.contract_name}
                  </Col>
                  <Col>
                    <img
                      className="img-style"
                      src={element.logo_url}
                      alt={element.contract_name}
                    />
                  </Col>
                  <h2 className="price">PRICE: {element.quote_rate} USD</h2>
                  <Col></Col>
                </Row>
                <Row className="row2">
                  <Col className="pv-style">
                    <h2>PRICE VOLATILITY</h2>
                  </Col>
                  <Col>
                    <h3>2 Hours: {element.stddev_2h}</h3>
                  </Col>
                  <Col>
                    <h3>4 Hours: {element.stddev_4h}</h3>
                  </Col>
                  <Col>
                    <h3>8 Hours: {element.stddev_8h}</h3>
                  </Col>
                  <Col>
                    <h3>16 Hours: {element.stddev_16h}</h3>
                  </Col>
                  <Col>
                    <h3>24 Hours: {element.stddev_24h}</h3>
                  </Col>
                </Row>
              </>
            );
          })
        )}
      </Container>
    </div>
  );
};

export default CryptoDetail;
