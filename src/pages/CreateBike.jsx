import React from 'react'

const CreateBike = () => {
  return (
    <section class="announcement-form-container">
  <h1>Create an Announcement</h1>
  <form class="announcement-form">
    <div class="form-group">
      <label for="model">Model</label>
      <input type="text" id="model" name="model" required placeholder="Enter bike model" />
    </div>
    
    <div class="form-group">
      <label for="category">Category</label>
      <select id="category" name="category" required>
        <option value="" disabled selected>Select Category</option>
        <option value="mountain">Mountain</option>
        <option value="road">Road</option>
        <option value="hybrid">Hybrid</option>
        <option value="electric">Electric</option>
      </select>
    </div>

    <div className="form-group">
      <label for="color">Color</label>
      <input type="text" id="color" name="color" required placeholder="Enter bike color" />
    </div>

    <div className="form-group">
      <label for="weight">Weight (kg)</label>
      <input type="number" id="weight" name="weight" required placeholder="Enter bike weight in kg" />
    </div>

    <div className="form-group">
      <label for="byke-image">Bike Image</label>
      <input type="file" id="byke-image" name="byke_image" accept="image/*" required />
    </div>

    <div className="form-group">
      <label for="pub-image">Public Image</label>
      <input type="file" id="pub-image" name="pub_image" accept="image/*" required />
    </div>

    <div className="form-group">
      <label for="size">Size</label>
      <input type="text" id="size" name="size" required placeholder="Enter bike size (e.g., M, L, XL)" />
    </div>

    <div className="form-group">
      <label for="material">Material</label>
      <input type="text" id="material" name="material" required placeholder="Enter bike material (e.g., Carbon Fiber)" />
    </div>

    <div className="form-group">
      <label for="general-description">General Description</label>
      <textarea id="general-description" name="general_description" rows="5" required placeholder="Enter general description of the bike"></textarea>
    </div>

    <button type="submit">Submit Announcement</button>
  </form>
</section>
  )
}

export default CreateBike