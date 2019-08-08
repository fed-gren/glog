import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import styled from "styled-components";
import Header from "../components/Header/Header";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 1.8rem;
`;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        {children}
      </Wrapper>
    );
  }
}
