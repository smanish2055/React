import React from 'react';

const Form = () => {

  return (
    <div className="contact-form">
    <form action="http://localhost:3001/submit-form" method="POST">

        <div className="form-group">
          <label htmlFor="fullName">Your full name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="eg. John Smith"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="eg. you@example.com"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="howToWork">How do you want to work with us?</label>
          
          <select
            id="howToWork"
            name="howToWork"
            required
            className="form-control"
          >

            <option value="">Select an option</option>
            <option value="Option 1">Team Augmentation</option>
            <option value="Option 2">New Project</option>
            <option value="Option 3">Dedicated Team</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="service">What service do you require?</label>
          <select
            id="service"
            name="service"
            required
            className="form-control"
          >
            <option value="">Select an option</option>
            <option value="Service 1">Team Augmentation</option>
            <option value="Service 2">Products & Technology</option>
            <option value="Service 3">Design</option>
            <option value="Service 3">Data & AI</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">What is your phone number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
           
          
            placeholder="Enter your number"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Tell us something about your project</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
       
            placeholder="eg. I am looking to develop this incredible app that..."
            rows="4"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg ">SEND A MESSAGE</button>
      </form>
    </div>
  );
};

export default Form;
