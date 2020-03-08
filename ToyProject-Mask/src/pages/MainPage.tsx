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
      })
  }

  renderData = () => {
    return(
      Object.keys(this.curData[0]).map((data: any) => {
        return (
          <Statistic>
            <Statistic.Value>{this.curData[0][data]}</Statistic.Value>
            <Statistic.Label>{data}</Statistic.Label>
          </Statistic>
        )
      })
    )
  }

  

  render() {
    return (
      <Statistic.Group>
        {this.curData ? this.renderData() : null}
      </Statistic.Group>
    );
  }
}