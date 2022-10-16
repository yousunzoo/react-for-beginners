import PropTypes from "prop-types";
import styles from "../css/Detail.module.css";
function MovieDetail({
  coverImg,
  title,
  year,
  genres,
  description,
  rating,
  runtime,
  download,
  like,
}) {
  return (
    <div className={styles.detail}>
      <img src={coverImg} alt={title} />
      <div className={styles.movie_desc}>
        <h2 className={styles.movie_title}>{title}</h2>
        <div className={styles.movie_info}>
          <p>{year}년</p>
          <p>{runtime}분</p>
        </div>
        <div className={styles.movie_rate}>
          <p>rate : {rating}</p>
          <p>download : {download}</p>
          <p>likes : {like}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.genres}>
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default MovieDetail;
