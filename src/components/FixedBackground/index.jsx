import React from "react";
import Style from "style-it";
import "./fixedBackground.css";

export default class FixedBackground extends React.Component {
  render = () => {
    return (
      <Style>
        {`
          .fixed-background {
            background: url(${this.props.bgImage});
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
          }
        `}
        <div className="fixed-background">{this.props.content}</div>
      </Style>
    );
  };
}
