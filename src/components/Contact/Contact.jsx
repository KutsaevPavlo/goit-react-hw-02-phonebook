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
