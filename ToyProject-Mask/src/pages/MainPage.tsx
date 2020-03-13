import React, { Component } from "react";
import { Statistic } from 'semantic-ui-react'
import { observable } from "mobx";
import { observer } from "mobx-react";
import axios from "axios";

@observer
export class MainPage extends Component {

  @observable curData: any;

  componentDidMount() {
    axios.get(`http://slb-3774813.ncloudslb.com/`)
      .then(res => {

        console.error(res.data)

        this.curData = res.data.datas;

      })
  }

  renderData = () => {
    return (
      <Statistic>
        <Statistic.Value>{this.curData[0].key}</Statistic.Value>
        <Statistic.Label>{this.curData[0].value}</Statistic.Label>
      </Statistic>
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