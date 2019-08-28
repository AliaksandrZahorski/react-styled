import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { HomePage } from "../home-page/home-page";
import { Card } from "../card/card";

import './page.css';

const PrimaryLayout = styled.div`
  width: 800px;
  font-size: 1.2em;
  min-height: 200px;
  margin: 10px auto;
`;

export const Page = () => {
  return (
    <PrimaryLayout>
      <Route path="/" exact component={HomePage} />
      <Route path="/:id" component={Card} />
    </PrimaryLayout>
  );
};
