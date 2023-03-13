import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="">
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};
