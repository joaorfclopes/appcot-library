import React from "react";
import Style from "style-it";
import "./backgroundImg.css";

export default class BackgroundImg extends React.Component {
  render = () => {
    return (
      <Style>
        {`
          .background-img {
            background: url(${this.props.bgImage});
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: ${
              this.props.fixedBackground ? `fixed` : `scroll`
            };
          }
        `}
        <div className="background-img">{this.props.content}</div>
      </Style>
    );
  };
}
