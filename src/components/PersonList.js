import React from "react";

function PersonList({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old, and my super power is{" "}
        {person.skill}.
      </h2>
    </div>
  );
}

export default PersonList;
