import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ShowHide = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="form-check form-switch">
          <Form.Check
            aria-label=""
            onClick={handleClick}
            id=""
            defaultChecked=""
          />
        </div>
      </div>

      {isShown && <div className="">dfdfgsdfgsdfgsdfgsfgs</div>}

      {/* show component on click  */}
      {isShown || (
        <div>
          <h2></h2>
        </div>
      )}
    </>
  );
};

export default ShowHide;
