import React from "react";
import PersonList from "./PersonList";

function NameList() {
  const persons = [
    { id: 1, name: "Bruce", age: 30, skill: "matured" },
    { id: 2, name: "Clark", age: 32, skill: "Fly" },
    { id: 3, name: "Diana", age: 25, skill: "Girl" },
  ];
  const personList = persons.map((person) => (
    <PersonList key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
