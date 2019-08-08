import React from "react";

export default props => {
  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", background: `${props.sel}` }}
      >
        <div className="card-body">
          <h5 className="card-title"> {props.sel}</h5>
          <p className="card-text">{props.text}</p>
          <button
            className="btn btn-primary"
            onClick={() => props.dismiss(props.id)}
          >
            Dismiss
          </button>
        </div>
      </div>
      <br />
    </>
  );
};
