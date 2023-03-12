import { Contact } from 'components/ContactForm/Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <ul className="">
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
};
