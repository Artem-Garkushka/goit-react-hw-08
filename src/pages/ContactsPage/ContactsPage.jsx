import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectFilteredContacts, selectError } from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/Selectors";
import { RiContactsLine } from "react-icons/ri";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <h2>
        <RiContactsLine />
        Contacts
      </h2>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <SearchBox />
      <ContactList contacts={contacts} />
    </>
  );
};

export default ContactsPage;