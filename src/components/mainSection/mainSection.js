import React from "react";
import backgroundImage from "../../assets/img/main-section-image.webp";
import "./mainSection.css";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

export const MainSection = () => {
  return (
    <div className="main-section-layout">
      <div className="row main-section-innercomponent">
        <div className="main-section-image-part">
          <img src={backgroundImage} />
          <div className="main-section-overlay"></div>
        </div>
        <div className="main-section-content-part">
          <div className="row main-section-header">
            <div className="col-6 main-section-header-logo-section">Stremo</div>
            <div className="col-6 main-section-header-signin-button">
              <span>
                <button>Sign In</button>
              </span>
            </div>
          </div>
          <div className="row main-section-description-section">
            <span className="main-section-description-line-one">
              Endless movies, TV <br /> shows, and more.
            </span>

            <span className="main-section-description-line-two">
              Enjoy anywhere. Unsubscribe anytime.
            </span>
            <span className="main-section-description-line-three">
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>
            <br />
            <div className="row main-section-search-section">
              <Search
                placeholder="Email Address"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
