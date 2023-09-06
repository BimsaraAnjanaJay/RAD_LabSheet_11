import React from 'react';

function Navbar({ setShowForm }) {
  return (
    <nav>
      <button onClick={() => setShowForm(false)}>List of Students</button>
      <button onClick={() => setShowForm(true)}>Add Student</button>
    </nav>
  );
}

export default Navbar;