import React from "react";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return <button onClick={handleGoBack}>Go Back</button>;
}

export default GoBackButton;
