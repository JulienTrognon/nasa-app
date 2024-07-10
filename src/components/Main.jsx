import PropTypes from "prop-types";

export default function Main({ data }) {
  return (
    <div className="img-container">
      <img
        src={data.hdurl}
        alt={data.title || "NASA APOD"}
        className="bg-img"
      />
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.object.isRequired,
};
