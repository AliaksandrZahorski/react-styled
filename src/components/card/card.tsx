import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const logo = require('./images.jpg');

type CardUIPropType = {
  current: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
};

const CardLayout = styled.div`
  margin: 15px 0 0 0;
`;

const mapStateToProps = ({ data }: any) => ({
  current: data.current
});

class CardUI extends Component<CardUIPropType, null> {
  render() {
    const { current } = this.props;
    return current.id ? (
      <CardLayout>
        <div>Id: {current.id}</div>
        <div>UserId: {current.userId}</div>
        <div>Title: {current.title}</div>
        <div>Body: {current.body}</div>
        <img src={logo} alt="Logo" />
      </CardLayout>
    ) : (
      <div> No data... </div>
    );
  }
}

export const Card = connect(mapStateToProps)(CardUI);
