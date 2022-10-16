import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.card}>
      <img src={coverImg} alt={title} />
      <div className={styles.description}>
        <h2>
          <Link to={`movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.summary}>{summary}</p>
        <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
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
