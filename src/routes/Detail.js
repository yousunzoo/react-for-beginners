import MovieDetail from "../components/MovieDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);

    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="container detail__container">
      {loading ? (
        <div className="loader">
          <span>Loading...</span>
        </div>
      ) : (
        <MovieDetail
          key={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          year={movie.year}
          genres={movie.genres}
          description={movie.description_full}
          rating={movie.rating}
          runtime={movie.runtime}
          download={movie.download_count}
          like={movie.like_count}
        />
      )}
    </section>
  );
}
export default Detail;
