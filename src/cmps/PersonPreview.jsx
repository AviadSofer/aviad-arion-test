import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePerson } from "../services/person.service";

export const PersonPreview = ({ person }) => {

    const dispatch = useDispatch()
    const { related } = person
    const [toggleEditMode, setToggleEditMode] = useState(false)
    const [personState, setPersonState] = useState(person)

    const handleChange = () => {
        // TODO: update person
    }
    
    const onUpdatePerson = () => {
        // TODO: update person

    }

    return (
        <li className="person-preview">
            <h3>{person.name}</h3>
            <p>{person.phone}</p>
            {Object.entries(related).map(([relatedType, relatedValues]) => (
                <div className="related">
                    <h4>{relatedType}</h4>
                    <ul>
                        {Object.entries(relatedValues).map(([key, value]) => {
                            const inputVal = personState.related[relatedType][key]
                            return (
                                <li className={`related-preview ${toggleEditMode ? 'edit-mode' : ''}`} key={key}>
                                    <h5>{key}:</h5>
                                    {!toggleEditMode ? <h5>{value}</h5> : <input name={key} type="text" value={inputVal} onChange={(ev) => handleChange(ev, relatedType)} />}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
            )}
            {toggleEditMode ?
                <button className="btn-save" onClick={onUpdatePerson}>Save</button>
                : <button className="btn-edit" onClick={() => setToggleEditMode(prev => !prev)}>Edit</button>}
        </li>
    );
}