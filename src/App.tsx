import "./App.css";
import Header from "./components/header";
import ContactList from "./components/contact-list";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./redux/actions/address";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.address.contacts);
  
  
  useEffect(() => {
    dispatch(actions.findAllContacts());
  }, []);
  
  const handleSearch = (key: any) => {
    dispatch(
      actions.searchByString(key)
    );
  };

  return (
    <div>
      <Header search={handleSearch} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
