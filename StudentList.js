import React from 'react';

function StudentList({ students }) {
  return (
    <div>
      <h1>List of Students</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <strong>{student.name}</strong> ({student.email}) - {student.indexNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;