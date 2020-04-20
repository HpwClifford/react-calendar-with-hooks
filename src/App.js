import React, { Component } from 'react';
import './App.css';
// import Week from './Week.js';

var url = 'http://slack-server.elasticbeanstalk.com/calendar/NY/18'

export default class App extends Component {
  contstructor() {
    this.state = 1;
  }

  render() {
    // const arr = Object.keys(this.state).map(elem =>  <Week data={elem}/>);
    console.log(this.state, '<- state');
    if (this.state) console.log(this.state.data);

    return (
      <div>
       {}
      </div>
    )
  }

  componentDidMount() {
    fetch(url)
    .then(data => data.json())
    .then(data => {
      this.setState({
        data: data,
      });
    });
  }
}
