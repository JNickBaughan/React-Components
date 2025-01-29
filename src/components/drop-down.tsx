import React from "react";

const DropDown = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div onClick={() => setOpen(true)} className="drop-down input">
      {open && (
        <div className="drop-down-content">
          <div className="drop-down-input">Choice One</div>
          <div className="drop-down-input">Choice Two</div>
          <div className="drop-down-input">Choice Three</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
