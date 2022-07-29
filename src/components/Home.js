import React, { useState } from "react";
import axios from "axios";


function Home(props) {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);


  const getmovie = (event) => {
    event.preventDefault();
    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=280b5548`)
       .then((response) => {
        setMovie(response.data.Search);
       });
  };

  const changetext = (event) => {
    setText(event.target.value);
  };
  

  
  return (
    <>
    
    <div className="container my-4 " style={{ backgroundColor: "black" }} >
        <form className="d-flex " onSubmit={getmovie} role="search">
          <input
            className="form-control me-2 my-4 "
            type="search"
            placeholder="Search Movies Of Your Choice"
            aria-label="Search"
            value={text}
            onChange={changetext}
          />
          <button className="btn btn-outline-success me-2 my-4" type="submit">
            SearchMovie
          </button>
        </form>
        
      <div className="container my-3">
        <div className="row">
          {movie.map((value, _id) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.Poster}
                    className="card-img-top"
                    width="250"
                    height="350"
                    alt="..."
                  />
                  <div className="card-body">
                    <h3 className="card-title">{value.Title}</h3>
                    <h5 className="card-text">{value.Year}</h5>
                    <a href="/" className="btn btn-primary">
                      Add to Playlist
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
     
    </>
  );
}

export default Home;
