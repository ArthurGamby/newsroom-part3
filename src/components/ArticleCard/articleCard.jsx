import React from "react";
import {
  ThumbsUp as Like,
  CommentChatMessageAlt as Comments,
  ArrowRight,
} from "react-basicons";
import { StyledContainer } from "./articleCard.styles";

function ArticleCard({ title, description, img }) {
  return (
    <StyledContainer>
      <div className="article-card">
        <img src={img} alt="" />
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="divider" />
        <div className="description">
          <span>{description}</span>
        </div>
        <div className="data-section">
          <div className="like-icon vertical-centered">
            <Like size={16} />
            <span>165</span>
          </div>
          <div className="comments-icon vertical-centered">
            <Comments size={16} />
            <span>165</span>
          </div>
          <div className="more vertical-centered">
            <span>more..</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default ArticleCard;
