import React, { useState } from 'react';

function StudentForm({ handleAddStudent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [indexNumber, setIndexNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, email, indexNumber };
    handleAddStudent(newStudent);
    setName('');
    setEmail('');
    setIndexNumber('');
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Index Number:
          <input type="text" value={indexNumber} onChange={(e) => setIndexNumber(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;