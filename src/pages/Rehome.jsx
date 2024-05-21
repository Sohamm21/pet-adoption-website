import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputText from "../components/InputText";
import SelectableDiv from "../components/SelectableDiv";
import axios from "axios";

const Rehome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    gender: "",
    description: "",
    photos: [],
    location: "",
    contact: "",
  });

  const genderOptions = [
    { id: "male", value: "male", optionText: "Male" },
    { id: "female", value: "female", optionText: "Female" },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData({ ...formData, photos: Array.from(files) });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cloudinaryURLs = await Promise.all(
        formData.photos.map(async (image) => {
          const imageData = new FormData();
          imageData.append("file", image);
          imageData.append("upload_preset", "pet-adoption");
          imageData.append("cloud_name", "dyrv985gb");
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dyrv985gb/image/upload",
            imageData
          );
          return response.data.url;
        })
      );

      const petData = { ...formData, photos: cloudinaryURLs };

      await axios.post("http://localhost:5000/api/pets", petData);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
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
            maxlength={30}
            placeholder="Enter your pet's name"
            type="text"
            required
          />
          <InputText
            id="species"
            labelText="Species"
            value={formData.species}
            onChange={handleChange}
            minlength={3}
            maxlength={30}
            placeholder="Enter the pet's species"
            type="text"
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
            type="text"
            required
          />
          <InputText
            id="age"
            labelText="Age"
            value={formData.age}
            onChange={handleChange}
            min={0}
            max={100}
            placeholder="Enter the pet's age"
            type="number"
            required
          />
          <InputText
            id="description"
            labelText="Description"
            value={formData.description}
            onChange={handleChange}
            minlength={3}
            maxlength={30}
            placeholder="Enter the pet's description"
            type="text"
            required
          />
          <InputText
            id="location"
            labelText="Location"
            value={formData.location}
            onChange={handleChange}
            minlength={3}
            maxlength={30}
            placeholder="Enter the pet's location"
            type="text"
            required
          />
          <InputText
            id="contact"
            labelText="Contact"
            value={formData.contact}
            onChange={handleChange}
            minlength={3}
            maxlength={20}
            placeholder="Enter your contact number"
            type="text"
            required
          />
          <SelectableDiv
            id="gender"
            labelText="Select gender"
            options={genderOptions}
            containsImage={false}
            selectedOption={formData.gender}
            onChange={handleGenderChange}
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
        </div>
        <input type="submit" value="Submit" className="submit-form" />
      </form>
    </div>
  );
};

export default Rehome;
