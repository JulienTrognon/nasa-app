import PropTypes from "prop-types";

export default function BtnToggleModal({ handleToggleModal }) {
  return (
    <button onClick={handleToggleModal} className="btn-info">
      <i className="fa-solid fa-circle-info"></i>
    </button>
  );
}

BtnToggleModal.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
};
