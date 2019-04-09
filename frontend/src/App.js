import React from "react";
import styled from "styled-components";

import Hero from "./sections/Hero";
import Providers from "./sections/Providers";

const Page = styled.div``;

export default class extends React.Component {
  state = {
    selectedProvider: null,
  };

  setSelectedProvider = providerId =>
    this.setState({ selectedProvider: providerId });

  render() {
    return (
      <Page>
        <Hero />
        <Providers
          selectedProvider={this.state.selectedProvider}
          setProvider={this.setSelectedProvider}
        />
      </Page>
    );
  }
}
