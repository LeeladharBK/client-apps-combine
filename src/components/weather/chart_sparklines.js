// Component to render the graph using spark-lines
import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import _ from "lodash";

// function to calculate the average
function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default props => {
  return (
    <div>
      <Sparklines heigth={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.unit}</div>
    </div>
  );
};
