import React, { useState } from "react";
import InputText from "../components/InputText";
import SelectableDiv from "../components/SelectableDiv";

const Rehome = () => {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    gender: "", // Change to gender instead of selectedGender
    description: "",
    images: [],
    location: "",
  });

  const genderOptions = [
    { id: "male", value: "male", optionText: "Male" },
    { id: "female", value: "female", optionText: "Female" },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleGenderChange = (gender) => {
    setFormData({
      ...formData,
      gender: gender,
    });
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="rehome-pet-container">
      <h3>Rehome a Pet</h3>
      <h5>Pet Details</h5>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <InputText
            id="name"
            labelText="Pet Name"
            value={formData.name}
            onChange={handleChange}
            minlength={3}
            maxlength={20}
            placeholder="Enter your pet's name"
            required
          />
          <InputText
            id="species"
            labelText="Species"
            value={formData.species}
            onChange={handleChange}
            minlength={3}
            maxlength={20}
            placeholder="Enter the pet's species"
            required
          />
          <InputText
            id="breed"
            labelText="Breed"
            value={formData.breed}
            onChange={handleChange}
            minlength={3}
            maxlength={30}
            placeholder="Enter the pet's breed"
          />
          <InputText
            id="age"
            labelText="Age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter the pet's age"
            type="number"
            min={0}
            max={100}
          />
          <SelectableDiv
            id="gender"
            labelText="Select gender"
            options={genderOptions}
            containsImage={false}
            selectedOption={formData.gender} // Pass gender as selectedOption
            onChange={handleGenderChange}
          />
          <InputText
            id="description"
            labelText="Description"
            value={formData.description}
            onChange={handleChange}
            minlength={3}
            maxlength={30}
            placeholder="Enter the pet's description"
          />
          <div className="input-image-container">
            <label htmlFor="formFile" className="form-label">
              Upload pet images
            </label>
            <input
              className="form-control input-image"
              type="file"
              id="formFileMultiple"
              accept=".jpg, .jpeg, .png"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <InputText
            id="location"
            labelText="Location"
            value={formData.location}
            onChange={handleChange}
            minlength={3}
            maxlength={30}
            placeholder="Enter the pet's location"
          />
        </div>
        <input type="submit" value="Submit" className="submit-form" />
      </form>
    </div>
  );
};

export default Rehome;
