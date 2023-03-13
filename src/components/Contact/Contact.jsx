import PropTypes from 'prop-types';
export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number} </span>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
