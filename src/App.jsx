import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import ContactRow from "./components/ContactRow";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View <button onClick={()=>{setSelectedContactId(0)}}>Back</button></div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}  
    </>
  );
}
export default App