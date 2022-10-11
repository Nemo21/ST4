import "./App.css";
import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormInput from "./components/FormInput";
import NewCard from "./components/NewCard";

function App() {
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    Name: "",
    Purpose: "",
    Rating: "",
    Recc: "",
  });
  const Inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Name",
      label: "Name",
    },
    {
      id: 2,
      name: "Purpose",
      type: "text",
      placeholder: "Purpose",
      label: "Purpose",
    },
    {
      id: 3,
      name: "Rating",
      type: "text",
      placeholder: "Rating",
      label: "Rating",
    },
    {
      id: 4,
      name: "Recc",
      type: "text",
      placeholder: "Recc",
      label: "Recc",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const data1 = new FormData(e.target);
    setData([...data, values]);
    console.log(data);
    // console.log(Object.fromEntries(data1.entries()));
  };
  const onChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <form onSubmit={handleSubmit}>
                <h1>Customer Registeration</h1>
                {Inputs &&
                  Inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                <button>Submit</button>
                <Link to="/card">Go to Cards</Link>
              </form>
            }
          ></Route>
          <Route path="/card" element={<NewCard data={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
