import {
  getAllPersonsAction,
  updatePersonAction,
} from "../redux/actions/personActions";
import { storageService } from "./storgae.service";

const PERSON_DB = "personDB";
const { loadFromStorage, saveToStorage } = storageService;

export const getAllPersons = () => async (dispatch) => {
  const persons = await query(PERSON_DB);
  dispatch(getAllPersonsAction(persons));
  return persons;
};

export const updatePerson = (person) => async (dispatch) => {
  const personRespnse = await put(PERSON_DB, person);
  dispatch(updatePersonAction(personRespnse));
  return personRespnse;
};

async function query() {
  // TODO: get data from local storage if empty get from service and save to local storage
  const isPersons = loadFromStorage(PERSON_DB);

  if (!isPersons) {
    saveToStorage(PERSON_DB, PERSONS);
  }

  const persons = loadFromStorage(PERSON_DB);
  return persons;
}
async function put(key, value) {
  // TODO: update person in local storage
  const persons = loadFromStorage(PERSON_DB);

  const index = persons.findIndex((person) => person.id === value.id);
  persons[index] = value;

  saveToStorage(key, persons);

  // Aviad: after we finish I added this line
  return value;
}

const PERSONS = [
  {
    id: 1,
    name: "John",
    age: 20,
    phone: "054-1234567",
    habites: ["sleep", "eat", "code"],
    img: "https://www.w3schools.com/howto/img_avatar.png",
    status: "single",
    related: {
      parents: {
        father: "Oded",
        mother: "Tal",
      },
      siblings: {
        brother: "Bar",
        sister: "Dana",
      },
    },
  },
  {
    id: 2,
    name: "sarah",
    age: 20,
    phone: "054-1234567",
    habites: ["sleep", "eat", "code"],
    img: "https://www.w3schools.com/howto/img_avatar.png",
    status: "single",
    related: {
      parents: {
        father: "John",
        mother: "Jane",
      },
      siblings: {
        brother: "Ron",
        sister: "Shira",
      },
    },
  },
  {
    id: 3,
    name: "adi",
    age: 20,
    phone: "054-1234567",
    habites: ["sleep", "eat", "code"],
    img: "https://www.w3schools.com/howto/img_avatar.png",
    status: "single",
    related: {
      parents: {
        father: "Gabi",
        mother: "Mira",
      },
      siblings: {
        brother: "Ran",
        sister: "bili",
      },
    },
  },
];
