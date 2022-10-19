import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres, year }) {
  return (
    <div className="movie">
      <img src={coverImg} alt={title} />
      <div className="movie__data">
        <h3 className="movie__title">
          <Link
            to={{
              pathname: `/react-for-beginners/movie-detail/${id}`,
              state: {
                id,
                coverImg,
                title,
                summary,
                genres,
              },
            }}>
            {title}
          </Link>
        </h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
        <ul className="movie__genres">
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
