import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    className: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(formData)}`);
    // Add your submit logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </div>

      <div>
        <label>Class:</label>
        <input type="text" name="className" value={formData.className} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
