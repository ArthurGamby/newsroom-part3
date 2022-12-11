import React from "react";
import { StyledContainer } from "./quickInfoCard.styles";

function QuickInfoCard({ title, description }) {
  return (
    <StyledContainer>
      <div className="info-card">
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="summary">
          <span>{description}</span>
        </div>
      </div>
    </StyledContainer>
  );
}

export default QuickInfoCard;
