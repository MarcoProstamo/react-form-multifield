export default function Main() {
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
                placeholder="Title"
              />
              <label htmlFor="titleInput">Title</label>
            </div>
            <div className="form-floating col">
              <input
                type="text"
                className="form-control"
                id="authorInput"
                placeholder="Author"
              />
              <label htmlFor="authorInput">Author</label>
            </div>
            <div className="col">
              <select name="categories" className="form-select">
                <option selected>Select Category</option>
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
                placeholder="Content"
              />
              <label htmlFor="contentInput">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                className="btn-check"
                id="publishInput"
                autoComplete="off"
              />
              <label className="btn btn-outline-light" htmlFor="publishInput">
                Public
              </label>
            </div>
            <div>
              <button className="btn btn-light">Create</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
