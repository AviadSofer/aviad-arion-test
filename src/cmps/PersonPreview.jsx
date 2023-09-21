import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePerson } from "../services/person.service";

export const PersonPreview = ({ person }) => {
  const { related } = person;
  const [toggleEditMode, setToggleEditMode] = useState(false);
  const [personState, setPersonState] = useState(person);

  const dispatch = useDispatch();

  const handleChange = (e, relatedType) => {
    // TODO: handle change event input
    const { name, value } = e.target;

    setPersonState((prev) => {
      const newState = {
        ...prev,
        related: {
          ...prev.related,
          [relatedType]: {
            ...prev.related[relatedType],
            [name]: value,
          },
        },
      };

      return newState;
    });
  };

  const onUpdatePerson = () => {
    // TODO: update person (use updatePerson function in person.service)
    dispatch(updatePerson(personState));
    setToggleEditMode(false);
  };

  return (
    <li className="person-preview">
      <h3>{person.name}</h3>
      <p>{person.phone}</p>
      {Object.entries(related).map(([relatedType, relatedValues]) => (
        // Aviad: after we finish I added this key
        <div key={relatedType} className="related">
          <h4>{relatedType}</h4>
          <ul>
            {Object.entries(relatedValues).map(([key, value]) => {
              const inputVal = personState.related[relatedType][key];
              return (
                <li
                  className={`related-preview ${
                    toggleEditMode ? "edit-mode" : ""
                  }`}
                  key={key}
                >
                  <h5>{key}:</h5>
                  {!toggleEditMode ? (
                    <h5>{value}</h5>
                  ) : (
                    <input
                      name={key}
                      type="text"
                      value={inputVal}
                      onChange={(e) => handleChange(e, relatedType)}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {toggleEditMode ? (
        <button className="btn-save" onClick={onUpdatePerson}>
          Save
        </button>
      ) : (
        <button
          className="btn-edit"
          onClick={() => setToggleEditMode((prev) => !prev)}
        >
          Edit
        </button>
      )}
    </li>
  );
};
