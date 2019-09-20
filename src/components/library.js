import React, { Component } from "react"
import NavBar from "./navbar/NavBar"
import ApplicationViews from "./ApplicationViews"


class Library extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}

export default Library