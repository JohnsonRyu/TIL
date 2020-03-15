import React, { Component } from "react";
import { Grid, Header } from 'semantic-ui-react'
import { observable } from "mobx";
import { observer } from "mobx-react";
import axios from "axios";

@observer
export class MainPage extends Component {

  @observable curData: any;

  componentDidMount() {
    axios.get(`http://slb-3774813.ncloudslb.com/`)
      .then(res => {
        this.curData = res.data.datas;
      })
  }

  renderData = () => {
    return(
      this.curData.map((data: any) => {
        return (
          <Grid.Row centered>
            <Grid.Column textAlign="center">
              <Header as="h2">{data.key}</Header>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Header as="h4">{data.value}</Header>
            </Grid.Column>
          </Grid.Row>
        )
      })
    )
  }

  render() {
    return (
      <Grid columns={3} divided>
        {this.curData ? this.renderData() : null}
      </Grid>
    );
  }
}