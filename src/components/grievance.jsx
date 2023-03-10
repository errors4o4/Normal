import React from "react";
import "./components.css";
import {useState} from 'react'
function Grievance() {
  const [state, setState] = useState('A')
  return (
    <div>
      <br />
      <h1 className="center_h">Grievance Submission</h1>
      <p className="center_h">
        We hear your problems. We will be the voice for you.
      </p>
      <div className="center">
        <form>
          <div class="mb-3"></div>

          <div className="input-group">
            <span clasName="input-group-text">Explain your issue here:</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            />  
          </div>
          <br />
          <label for="exampleInputPassword1" className="form-label m-2  ">
            Choose your Ward:
          </label>
          <label htmlFor="inputPassword4" className="form-label"></label>
          <select id="inputState" className="form-select" name="ward" onChange={(e) => {setState(e.target.value)}}>
            <option value="A">Ward A</option>
            <option value="B">Ward B</option>
            <option value="C">Ward C</option>
            <option value="D">Ward D</option>
            <option value="E">Ward E</option>
            <option value="F">Ward F</option>
          </select>
          <br />
          <div className="center_h">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="text-center py-5">
            <h5>
              Note: PwD Officer for ward {state} is Mr Rahul. Contact him on 999-9999-999
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Grievance;
