import PropTypes from "prop-types";

export default function Sidebar({ handleToggleModal, data }) {
  return (
    <div className="sidebar">
      <div className="bg-overlay"></div>
      <div className="sidebar-content">
        <h2>{data?.title}</h2>
        <div className="sidebar-description-container">
          <h5 className="sidebar-description">{data?.date}</h5>
          <p>{data?.explanation}</p>

          <h5 className="sidebar-description">&copy; {data?.copyright}</h5>
        </div>
      </div>
      <button onClick={handleToggleModal} className="btn-close-sidebar">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

Sidebar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
