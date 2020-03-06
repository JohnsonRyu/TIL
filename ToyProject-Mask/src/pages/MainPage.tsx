import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import axios from "axios";

@observer
export class MainPage extends Component {

  @observable curData: any;

  componentDidMount() {
    axios.get(`http://ec2-15-164-165-70.ap-northeast-2.compute.amazonaws.com/naeulcheck`)
      .then(res => {

        this.curData = res.data;
        console.warn(this.curData);
      })
  }

  render() {
    return (
      <div>
        {this.curData ? this.curData[0].time : "dd"}
      </div>
    );
  }
}