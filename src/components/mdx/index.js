import React from "react";
import Footnote from "./footnote";

export default {
  sup: (props) => <Footnote key={props.id} {...props} />,
  Footnote: (props) => <Footnote key={props.id} {...props} />,
};
