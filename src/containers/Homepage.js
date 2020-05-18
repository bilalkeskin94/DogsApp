import React from "react";
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
class Homepage extends React.Component {
  componentDidMount() {
    // localstoragedan getirme
    /*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/
    this.props.fetchData();
  }

  /*toggle = (dogId) => {
    getId(dogId);
    const foundDog = this.state.favorites.find(
      (favorite) => favorite.dogId === dogId
    );

    if (foundDog) {
      axios
        .delete(`${apiHost}/favorites/${foundDog.id}`)
        .then((result) => {
          this.setState({
            favorites: this.state.favorites.filter(
              (dog) => dog.dogId !== dogId
            ),
            lockButton: false,
          });
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
      axios
        .post(`${apiHost}/favorites`, {
          dogId,
        })
        .then((result) => {
          const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
          this.setState({
            favorites: [...this.state.favorites, eklenenFavori],
            lockButton: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };*/

  render() {
    if (this.props.loadingFavorites) {
      return (
        <div>
          <h1>Sayfa Yukleniyor.....</h1>
        </div>
      );
    }
    return (
      <div>
        <ul>
          {dogs.map((dog) => {
            return <Dog id={dog.id} name={dog.name} image={dog.image} />;
          })}
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = {
  fetchData,
};

export default connect(null, mapDispatchToProps)(Homepage);
