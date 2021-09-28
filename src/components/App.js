import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  onFormSubmit = async (term) => {
    try {
      const res = await unsplash.get("/search/photos", {
        params: {
          query: term,
        },
      });
      //console.log(res.data.results);
      //console.log(res);
      if (res.status === 200) {
        if (res.data) {
          this.setState({ images: res.data.results });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
