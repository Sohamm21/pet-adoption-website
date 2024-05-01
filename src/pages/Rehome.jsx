import React, { useEffect, useState } from "react";
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
  });

  const genderOptions = [
    { id: "male", value: "male", optionText: "Male" },
    { id: "female", value: "female", optionText: "Female" },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, photos: Array.from(e.target.files) });

  const handleGenderChange = (gender) => setFormData({ ...formData, gender });

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
          {["name", "species", "breed", "age", "description", "location"].map(
            (field) => (
              <InputText
                key={field}
                id={field}
                labelText={
                  field === "name"
                    ? "Pet Name"
                    : field === "species"
                    ? "Species"
                    : field === "breed"
                    ? "Breed"
                    : field === "age"
                    ? "Age"
                    : field === "description"
                    ? "Description"
                    : "Location"
                }
                value={formData[field]}
                onChange={handleChange}
                minlength={3}
                maxlength={field === "age" ? 2 : 30}
                placeholder={
                  field === "name"
                    ? "Enter your pet's name"
                    : field === "species"
                    ? "Enter the pet's species"
                    : field === "breed"
                    ? "Enter the pet's breed"
                    : field === "age"
                    ? "Enter the pet's age"
                    : field === "description"
                    ? "Enter the pet's description"
                    : "Enter the pet's location"
                }
                type={field === "age" ? "number" : "text"}
                min={field === "age" ? 0 : undefined}
                max={field === "age" ? 100 : undefined}
                required={field !== "breed"}
              />
            )
          )}
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
