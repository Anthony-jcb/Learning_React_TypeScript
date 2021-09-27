import { useState, FormEvent } from "react";

const initialState: { id: ""; name: ""; stars: ""; } = {
  id: "",
  name: "",
  stars: "",
};

function Form() {
  const [form , setForm] = useState(initialState);

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({
      ...form,
      [name]: value,
    })
  };
  const handleSubmit = (e: FormEvent) => {};
  const handleReset = (e: FormEvent) => {};

  return (
    <div>
      <h3>ADD</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="stars"
          placeholder="stars"
          onChange={handleChange}
          value={form.stars}
        />
        <br />
        <input type="submit" value="Send" />
        <input type="reset" value="Clear" onClick={handleReset} />
      </form>
    </div>
  );
}

export default Form;
