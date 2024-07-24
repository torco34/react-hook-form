import React from 'react';


export const StudentProfile = ({ student }) => {
  return (
    <div className="studentProfile">
      <div className="profileHeader">
        {/* <img src={student.photo} alt="Profile Picture" className="profilePhoto" /> */}
        <h2 className="studentName">luis</h2>
      </div>
      <div className="profileInfo">
        <p><strong>Email:</strong> </p>
        <p><strong>Age:</strong> </p>
        <p><strong>Major:</strong> </p>
        <p><strong>About:</strong></p>
      </div>
    </div>
  );
}


