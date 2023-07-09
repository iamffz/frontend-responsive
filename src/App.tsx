import { FC, useMemo } from "react";
import { Carousel } from "antd";

import { IContent } from "./interfaces/content.interface";

import IMGFootballer from "@/assets/images/footballer.svg";
import IMGFootballerTablet from "@/assets/images/footballer_tablet.svg";
import IMGFootballerDesltop from "@/assets/images/footballer_desktop.svg";
import IMGBasketball from "@/assets/images/basketball.svg";
import IMGBasketballTablet from "@/assets/images/basketball_tablet.svg";
import IMGBasketballDesktop from "@/assets/images/basketball_desktop.svg";

import "antd/dist/reset.css";
import "./App.css";

const App: FC = () => {
  const contentFootball: IContent[] = useMemo(() => {
    return [
      {
        title: "CONNECTION",
        description:
          "Connect with coaches directly, you can ping coaches to view profile.",
      },
      {
        title: "COLLABORATION",
        description:
          "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
      },
      {
        title: "GROWTH",
        description:
          "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
      },
    ];
  }, []);

  const contentBasketball: IContent[] = useMemo(() => {
    return [
      {
        title: "CONNECTION",
        description:
          "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
      },
      {
        title: "COLLABORATION",
        description:
          "Work with recruiter to increase your chances of findingtalented athlete.",
      },
      {
        title: "GROWTH",
        description: "Save your time, recruit proper athlets for your team.",
      },
    ];
  }, []);

  const renderContent = (contents: IContent[]) => {
    return contents.map((content, index) => {
      const num = index + 1;
      return (
        <div className="content-wrapper" key={`content-football-${index}`}>
          <div className="container">
            <div className="content-box">
              <div className="content-title-wrapper">
                <div className="content-no">{`0${num}`}</div>
                <div className="content-title">{content.title}</div>
              </div>
              <div className="content-description">{content.description}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {/* Section Footballer */}
      <section className="section-footballer">
        <div className="heading-wrapper">
          <div className="container">
            <h1 className="heading">ATHLETS</h1>
          </div>
        </div>
        <Carousel>{renderContent(contentFootball)}</Carousel>
        <article className="hide-mobile">{renderContent(contentFootball)}</article>
        <img
          className="img-player footballer show-mobile"
          src={IMGFootballer}
        />
        <img
          className="img-player footballer hide-mobile show-tablet"
          src={IMGFootballerTablet}
        />
        <img
          className="img-player footballer hide-mobile show-desktop"
          src={IMGFootballerDesltop}
        />
      </section>
      {/* Section Basketball */}
      <section className="section-basketball">
        <div className="heading-wrapper">
          <div className="container">
            <h1 className="heading">PLAYERS</h1>
          </div>
        </div>
        <Carousel>{renderContent(contentBasketball)}</Carousel>
        <article className="hide-mobile">{renderContent(contentBasketball)}</article>
        <img
          className="img-player basketball show-mobile"
          src={IMGBasketball}
        />
        <img
          className="img-player basketball hide-mobile show-tablet"
          src={IMGBasketballTablet}
        />
        <img
          className="img-player basketball hide-mobile show-desktop"
          src={IMGBasketballDesktop}
        />
      </section>
    </>
  );
};

export default App;
