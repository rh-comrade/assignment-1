'use client'
import React from 'react';
import { useState } from 'react';
const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    isAttendingWithGuest: false,
    guestName: '',
  });

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const showData = ()=>{
    alert(
        `Name:${formData.name}\n\Email:${formData.email}nAge:${formData.age}\nGuest:${formData.isAttendingWithGuest}\n${formData?.guestName}`
    )
  }
  const handleIsAttendingWithGuestChange = (event:any) => {
    setFormData({
      ...formData,
      isAttendingWithGuest: event.target.value === 'yes',
      guestName: event.target.value === 'yes' ? '' : '',
    });
  };

  return (
    <div className="container">
      <h1>Event Registration Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min={0}
            required
          />
        </div>
        <div className="form-group">
          <label>Are you attending with a guest?</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="attendingWithGuestYes"
              name="isAttendingWithGuest"
              value="yes"
              checked={formData.isAttendingWithGuest}
              onChange={handleIsAttendingWithGuestChange}
            />
            <label className="form-check-label" htmlFor="attendingWithGuestYes">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="attendingWithGuestNo"
              name="isAttendingWithGuest"
              value="no"
              checked={!formData.isAttendingWithGuest}
              onChange={handleIsAttendingWithGuestChange}
            />
            <label className="form-check-label" htmlFor="attendingWithGuestNo">
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="guestName">
            Guest Name (if attending with guest)
          </label>
          {formData.isAttendingWithGuest && ( // Conditional rendering with && operator
            <input
              type="text"
              className="form-control"
              id="guestName"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
            />
          )}
        </div>
        <button type="submit" onClick={showData} className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
  );
};

export default EventRegistrationForm;
