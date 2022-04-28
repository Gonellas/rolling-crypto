import { ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  const [datos, setDatos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&key=ckey_1c4049de4f7342d691c6d5eb431&page-size=20&page-number=0"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.items);
        setLoading(false);
        const topTen = data.data.items.filter(
          (element) => element.contract_name !== null
        );
        setDatos(topTen);
      });
  }, []);

  return (
    <section className="st-style">
      <>
        {loading
          ? "Cargando"
          : datos.map((element, index) => {
              return (
                <>
                  <ListGroup className="list-group" key={index}>
                    <ListGroup.Item className="list-link d-flex justify-content-between align-items-start">
                      <div className=" list-container">
                        <Link
                          to={`/detail/${element.contract_ticker_symbol}`}
                          className="list-link cts"
                        >
                          {element.contract_ticker_symbol}
                        </Link>
                        <br />
                        {element.contract_name}
                        <hr />
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </>
              );
            })}
      </>
    </section>
  );
};

export default SectionTwo;
