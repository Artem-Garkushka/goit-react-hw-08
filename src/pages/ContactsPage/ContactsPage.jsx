import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../../redux/contacts/contactOperations';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactsPage}>
      <h1>Contacts</h1>
      <form onSubmit={handleAddContact} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={css.input}
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={css.input}
            required
          />
        </label>
        <button type="submit" className={css.button}>Add Contact</button>
      </form>
      <ul className={css.contactsList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.contactItem}>
            <p className={css.contactName}>{contact.name}: {contact.number}</p>
            <button onClick={() => handleDeleteContact(contact.id)} className={css.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
