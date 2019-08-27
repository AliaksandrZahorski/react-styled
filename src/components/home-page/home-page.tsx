import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getData, getCurrentRecord } from "../../actions";
import { RecordsList } from "../records-list/records-list";

type HomePageUIPropType = {
  records: any;
  getData: Function;
  getCurrentRecord: Function;
  history: { push: Function };
};

const mapStateToProps = ({ data }: any) => ({
  records: data.data
});

class HomePageUI extends Component<HomePageUIPropType, null> {
  componentDidMount() {
    this.props.getData();
  }

  onClickHandler = (i: number) => {
    const { history, getCurrentRecord } = this.props;
    getCurrentRecord(i);
    history.push(`${i}`);
  };

  render() {
    const { records } = this.props;
    return <RecordsList data={records} onClickHandler={this.onClickHandler} />;
  }
}

export const HomePage = connect(
  mapStateToProps,
  { getData, getCurrentRecord }
)(HomePageUI);
