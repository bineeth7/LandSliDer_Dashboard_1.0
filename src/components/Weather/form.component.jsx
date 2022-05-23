import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-2 offset-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className=" col-md-2 offset-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-1 mt-md-0 mt-1  text-md-left offset-1 ">
            <button className="btn btn-primary" >Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
