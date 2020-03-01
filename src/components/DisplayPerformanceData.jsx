import React, { Component } from "react";
import { getData } from "../modules/performanceData";
import { Line, Polar, Bubble, Radar, Pie } from "react-chartjs-2";

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  };

  componentDidMount() {
    this.getPerformanceData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex != prevProps.updateIndex) {
      this.getPerformanceData();
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    });
  }

  render() {
    let dataIndex;

    if (this.state.performanceData != null) {
      dataIndex = (
        <div id="index" style={message3}>
          {this.state.performanceData.map(item => {
            return (
              <div key={item.id}>
                {item.data.distance} | {item.data.message}
              </div>
            );
          })}
        </div>
      );
    }
    const distances = [];
    const labels = [];

    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        distances.push(entry.data.distance);
        labels.push(entry.data.message);
      });
    }

    let dataForPieDiagram = {
      datasets: [{
        data: distances,
        label: "Past runs",
        fill: true, 
        borderColor: "#4B3021",
        backgroundColor: "#E9C45C",
        responsive: false,
        fontColor: 'white',
      }],
      
    };

    return (
      <div>
        {dataIndex}
        <Pie id='pie' data={dataForPieDiagram} />
      </div>
    );
  }
}

// styling
const message3 = {
  fontSize: '19px',
  marginLeft: '800px',
  alignItems: 'center',
  marginLeft: '950px',
  color: '#4B3021'
}

export default DisplayPerformanceData;
