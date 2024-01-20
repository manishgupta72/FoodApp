import React from "react";

const Card = ({item}) => {


  return (
    <div className="col-md-3 d-flex justify-content-center ">
      <div className="card mt-4" style={{ width: "18rem",}}>
        <img
          src={item.img}
          className="card-img-top"
          alt="..."
          style={{ height: "13rem",}}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <div className="container w-100">
            <select className="m-1 h-100 rounded text-light">
              {Array.from(Array(6), (e, i) => {
                
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-1 h-100  rounded text-light">
              <option value="Half">{item.options[0].half}</option>
              <option value="Full">{item.options[0].full}</option>
            </select>
            <div className="d-inline h-100 fs-4  fw-bold">{item.options[0].half}Rs.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
