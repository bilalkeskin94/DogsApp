import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
import "./styles.css";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
const Dog = ({ id, name, image }) => {
  return (
    <Container className="container-fluid mt-2 d-lg-inline-flex ">
      <div key={id}>
        <Row>
          <Col md={"4"} className="d-inline-block w-25 ">
            <Link to={`/detail/${id}`}>
              {name}
              <Image
                className="dog-images img-fluid card-img-top rounded-circle"
                src={image}
              />
            </Link>
          </Col>
          <div className="col-12 mt-3">
            <FavoriteActions id={id} />
          </div>
        </Row>
      </div>
    </Container>
  );
};
Dog.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  getStatus: PropTypes.bool,
  lockButton: PropTypes.bool,
  toggle: PropTypes.func,
};
Dog.defaultProps = {
  name: "Köpek İsmi:",
  getStatus: false,
  toggle: false,
  lockButton: false,
  image:
    "https://www.vets4pets.com/siteassets/species/dog/puppy/puppy-running-playing.jpg?w=585&scale=down",
};
export default Dog;
