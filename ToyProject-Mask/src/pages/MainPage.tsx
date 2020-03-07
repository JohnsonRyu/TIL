import React, { Component } from "react";
import { Statistic } from 'semantic-ui-react'
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

        res.data[0][Object.keys(res.data[0])[0]];
        console.warn(Object.keys(res.data[0]).length);
        console.warn(res.data[0][Object.keys(res.data[0])[1]]);
        console.warn(this.curData[0].length());
      })
  }

  renderData = () => {
    return(
      <Statistic>
        <Statistic.Value>5,550</Statistic.Value>
        <Statistic.Label>Downloads</Statistic.Label>
      </Statistic>
    )
  }

  

  render() {
    return (
      <div>
        {this.curData ? this.renderData() : null}
      </div>
    );
  }
}