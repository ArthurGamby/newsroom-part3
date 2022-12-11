import React from "react";

import { Spotlight } from "../../components/Spotlight";
import { StyledContainer } from "./homepage.styles";
import { ArticleCard } from "../../components/ArticleCard";
import { QuickInfoCard } from "../../components/QuickInfoCard";

import data from "../../data/articles.json";
import quick from "../../data/quick.json";

function HomePage(props) {
  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />
        <div className="news-container">
          <div className="articles-section">
            {data.map(({ title, description, urlToImage }) => (
              <ArticleCard
                title={title}
                description={description}
                img={urlToImage}
              />
            ))}
          </div>
          <div className="quick-infos-section">
            {quick.map(({ title, description }) => (
              <QuickInfoCard title={title} description={description} />
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HomePage;
