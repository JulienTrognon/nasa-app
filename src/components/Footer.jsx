import PropTypes from "prop-types";

export default function Footer({ data }) {
  return (
    <footer>
      <div className="bg-gradient"></div>
      <div>
        <h1>APOD Project</h1>
        <h2>{data?.title}</h2>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};
