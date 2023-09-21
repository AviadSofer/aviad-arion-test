import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPersons, personService } from "./services/person.service";
import { PersonPreview } from "./cmps/PersonPreview";

function App() {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.personReducer.persons);

  useEffect(() => {
    dispatch(getAllPersons());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>My contact page</h3>
      </header>
      <section className="main-content">
        {persons?.length > 0 ? (
          <ul className="person-container">
            {persons.map((person) => (
              <PersonPreview person={person} key={person.id} />
            ))}
          </ul>
        ) : (
          <h1>loading...</h1>
        )}
      </section>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
