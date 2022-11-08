export const GET_PERSONS = 'GET_PERSONS';
export const UPDATE_PERSON = 'UPDATE_PERSON';

export const getAllPersonsAction = (persons) => {
    return {
        type: GET_PERSONS,
        payload: persons
    }

}
export const updatePersonAction = (person) => {
    return {
        type: UPDATE_PERSON,
        payload: person
    }
}
