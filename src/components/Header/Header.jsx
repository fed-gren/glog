import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import LightSwitch from "../LightSwitch/LightSwitch";

const Header = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;

  & > h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  & a {
    text-decoration: none;
  }

  & a:visited {
    text-decoration: none;
    color: #e50a13;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

export default _ => {
  const [checked, setChecked] = useState(false);

  const changeHandler = checked => {
    setChecked(checked);
    console.log(checked);
    config.lightMode = checked;
  };

  return (
    <Header>
      <Link to={config.pathPrefix}>
        <h1>{config.siteTitle}</h1>
      </Link>
      {/* <LightSwitch changeHandler={changeHandler} checked={checked} /> */}
    </Header>
  );
};
