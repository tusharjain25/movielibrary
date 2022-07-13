import axios from "axios";
import React, { useState } from "react";
import logo from "../Assets/movielogo.jpg";

function Navbar() {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);
  const changetext = (event) => {
    setText(event.target.value);
  };
  const getmovie = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${text}&apikey=280b5548`)
      .then((response) => {
        setMovie(response.data.Search);
      });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt=""
              width="35"
              height="30"
              className="d-inline-block align-text-top"
            />
            MovieLibrary
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex " onSubmit={getmovie} role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movies"
                aria-label="Search"
                value={text}
                onChange={changetext}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-3">
        <div className="row">
          {
            movie.map((value,index)=>{
                return(
                    <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={value.Poster} className="card-img-top" width="250"
              height="350" alt="..." />
              <div className="card-body">
                <h3 className="card-title">{value.Title}</h3>
                <h5 className="card-text">{value.Year}</h5>
                <a href="/" className="btn btn-primary">
                  Add to Playlist
                </a>
              </div>
            </div>
          </div>
                )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Navbar;
