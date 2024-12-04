import { useState } from "react";
import { findDOMNode } from "react-dom";

const formInitialData = {
  author: "",
  content: "",
  image: "",
  status: false,
  tags: [],
  title: "",
  category: "",
};

export default function Main() {
  const [formData, setFormData] = useState(formInitialData);

  function handleFormChange(e) {
    const newFormData = {
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    setFormData(newFormData);
    console.log(newFormData);
  }

  function handleSubmit() {}

  return (
    <main>
      <div className="container pt-4">
        <h2 className="text-light text-center pb-4">Post Creation</h2>
        <section className="form-section">
          <form className="d-flex gap-3 flex-wrap justify-content-between align-items-center">
            <div className="form-floating col">
              <input
                type="text"
                className="form-control"
                id="titleInput"
                value={formData.title}
                name="title"
                onChange={handleFormChange}
                placeholder="Title"
              />
              <label htmlFor="titleInput">Title</label>
            </div>
            <div className="form-floating col">
              <input
                type="text"
                className="form-control"
                id="authorInput"
                value={formData.author}
                name="author"
                onChange={handleFormChange}
                placeholder="Author"
              />
              <label htmlFor="authorInput">Author</label>
            </div>
            <div className="col">
              <select
                name="categories"
                className="form-select"
                onChange={handleFormChange}
              >
                <option value="">Select Category</option>
                <option value="Programming">Programming</option>
                <option value="Web Design">Web Design</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Accessibility">Accessibility</option>
                <option value="React Development">React Development</option>
              </select>
            </div>
            <div className="form-floating col-12">
              <textarea
                type="text"
                className="form-control"
                id="contentInput"
                value={formData.content}
                name="content"
                onChange={handleFormChange}
                placeholder="Content"
              />
              <label htmlFor="contentInput">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                className="btn-check"
                id="publishInput"
                value={formData.status}
                name="status"
                onChange={handleFormChange}
                autoComplete="off"
              />
              <label className="btn btn-outline-light" htmlFor="publishInput">
                Public
              </label>
            </div>
            <div>
              <button className="btn btn-light" onClick={handleSubmit}>
                Create
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
