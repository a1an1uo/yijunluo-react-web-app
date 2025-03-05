import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="container mt-4">
      <h2>Array State Variable</h2>
      <button className="btn btn-primary mb-2" onClick={addElement}>Add Element</button>
      <ul className="list-group">
        {array.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button className="btn btn-danger btn-sm" onClick={() => deleteElement(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}