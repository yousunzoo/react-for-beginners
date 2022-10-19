import PropTypes from "prop-types";
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
    <div className="card">
      <img src={coverImg} alt={title} />
      <div className="detail">
        <h2 className="detail__title">{title}</h2>
        <div className="detail__info">
          <p>{year}년</p>
          <p>{runtime}분</p>
        </div>
        <div className="detail__rate">
          <p>rate : {rating}</p>
          <p>download : {download}</p>
          <p>likes : {like}</p>
        </div>
        <p className="detail__desc">{description}</p>
        <ul className="detail__genres">
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
