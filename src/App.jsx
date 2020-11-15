import "./css/App.css";
import { Row } from "./sections/Row";
import Nav from "./sections/Nav";
import requests from "./utils/requests";
import Banner from "./sections/Banner";
import { useState } from "react";
import movieTrailer from "movie-trailer";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleClick = (movie) => {
    const title = movie?.original_name || movie?.title || movie?.name || "";
    console.log({title})
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(title)
        .then((url) => {
          console.log(url, '=-==>')
          const urlParams = new URLSearchParams(new URL(url).search);
         setTrailerUrl(urlParams.get("v"));
          scrollToTop()
        })
        .catch((error) => console.log({ error }));
    }
  };

  return (
    <div className="App">
      <Nav />
      <Banner
        handleClick={handleClick}
        trailerUrl={trailerUrl} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        handleClick={handleClick}
        trailerUrl={trailerUrl}
      />
      <Row
        trailerUrl={trailerUrl}
        handleClick={handleClick}
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        trailerUrl={trailerUrl}
        handleClick={handleClick}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        trailerUrl={trailerUrl}
        handleClick={handleClick}
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        trailerUrl={trailerUrl}
        handleClick={handleClick}
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        trailerUrl={trailerUrl}
        handleClick={handleClick}
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        trailerUrl={trailerUrl}
        handleClick={handleClick}
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        trailerUrl={trailerUrl}
        handleClick={handleClick}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
