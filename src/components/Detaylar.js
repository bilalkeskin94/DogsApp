import React from "react";
import dogs from "../dogsdata";
import { Image, Container, Row, Col } from "react-bootstrap";
const Detaylar = (props) => {
  const secilenId = props.match.params.id;
  const secilenKopek = dogs.filter((dog) => dog.id === secilenId);
  return (
    <h2>
      {secilenKopek.map((dog) => {
        return (
          <div key={dog.id}>
            <Container fluid="xs">
              <Row>
                <Col xs={12} md={12}>
                  Secilen Köpeğin Id'si : {secilenId}
                </Col>
                <Col xs={12} md={12}>
                  Adı: {dog.name}
                </Col>
                <Col xs={12} md={12}>
                  Yaşı: {dog.age}{" "}
                </Col>
                <Col xs={12} md={12}>
                  Türü: {dog.breed}{" "}
                </Col>
                <Col xs={12} md={12}>
                  {" "}
                  İlan yayın tarihi: {dog.published_at}
                </Col>
                <Col xs={12} md={12}>
                  {" "}
                  Tarihçesi: {dog.description}
                </Col>
                <Col xs={12} md={12}>
                  <Image src={dog.image} fluid rounded w-100 />
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
    </h2>
  );
};
export default Detaylar;
