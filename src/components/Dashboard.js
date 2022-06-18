import React, { Component } from "react";

import Loading from "./Loading";
import Panel from "./Panel";

import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null,
  };

  selectPanel(id) {
    this.setState((prevState) => ({
      focused: prevState.focused !== null ? null : id,
    }));
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused,
    });
    const content = this.state.focused
      ? data.filter((item) => this.state.focused === item.id)
      : data;
    const panels = content.map((item) => {
      return (
        <Panel
          key={item.id}
          id={item.id}
          label={item.label}
          value={item.value}
          selectPanel={(event) => this.selectPanel(item.id)}
        />
      );
    });

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses}> {panels}</main>;
  }
}

export default Dashboard;
