import React, { Component } from "react";



var style = {
  borderTop: "1px solid #E7E7E7",
  marginTop: "50px",
  textAlign: "right",
  padding: "20px",
  width: "auto",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  fontFamily:'Gloria Hallelujah'
};

export default class Footer extends Component {
  render() {
    return <footer style={style}> by MengBanana & YHuangxu</footer>;
  }
}
