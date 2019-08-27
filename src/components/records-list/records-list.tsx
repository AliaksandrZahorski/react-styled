import React, { Fragment } from "react";
import styled from "styled-components";

type RecordsListType = {
  data: Array<any>;
  onClickHandler: Function;
};

const RecordLayout = styled.div`
  margin: 15px 0 0 0;
  cursor: pointer;
  &:hover {
    color: lightgray;

  }
`;

export const RecordsList = ({ data, onClickHandler }: RecordsListType) => (
  <Fragment>
    {data.map((i: any) => (
      <RecordLayout key={i.id} onClick={() => onClickHandler(i.id)}>
        {i.title}
      </RecordLayout>
    ))}
  </Fragment>
);
