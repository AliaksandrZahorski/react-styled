import React, { Component } from "react";
import { connect } from "react-redux";

type CardUIPropType = {
  current: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
};

const mapStateToProps = ({ data }: any) => ({
  current: data.current
});

class CardUI extends Component<CardUIPropType, null> {
  render() {
    const { current } = this.props;
    return current.id ? (
      <>
        <div>Id: {current.id}</div>
        <div>UserId: {current.userId}</div>
        <div>Title: {current.title}</div>
        <div>Body: {current.body}</div>
      </>
    ) : (
      <div> No data... </div>
    );
  }
}

export const Card = connect(mapStateToProps)(CardUI);
