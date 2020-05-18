import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { addFavourite, removeFavourite, getId } from "../redux/actions";

const FavoriteActions = (props) => {
  const toggle = (dogId) => {
    props.getId(dogId);
    const foundDog = props.favorites.find(
      (favorite) => favorite.dogId === dogId
    );
    if (foundDog) {
      props.removeFavourite(foundDog.id, dogId);
    } else {
      props.addFavourite(dogId);
    }
  };
  const getStatus = (dogId) => {
    const foundDog = props.favorites.find(
      (favorite) => favorite.dogId === dogId
    );
    return foundDog;
  };
  // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));

  const { id, lockButton } = props;
  return (
    <div className="buttons">
      {getStatus(props.id) ? (
        <Button
          color="danger"
          disabled={id === lockButton}
          onClick={() => {
            toggle(id);
          }}
        >
          Favorilerden Cikar
        </Button>
      ) : (
        <Button
          color="primary"
          disabled={id === lockButton}
          onClick={() => {
            toggle(id);
          }}
        >
          Favoriye Ekle
        </Button>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  removeFavourite,
  addFavourite,
  getId,
};

const mapStateToProps = (state) => {
  const { favorites, loadingFavorites, lockButton } = state.dogReducer;
  return {
    favorites,
    loadingFavorites,
    lockButton,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);
