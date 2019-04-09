import React from "react";
import styled from "styled-components";

import Hero from "./sections/Hero";
import Providers from "./sections/Providers";
import Addons from "./sections/Addons";
import Generate from "./sections/Generate";

const Page = styled.div``;

export default class extends React.Component {
  state = {
    selectedProvider: null,
    addons: [],
    // selectedProvider: "aws",
    // addons: ["graf", "pro"],
  };

  setSelectedProvider = providerId =>
    this.setState({ selectedProvider: providerId });

  setAddons = addons => this.setState({ addons });

  render() {
    return (
      <Page>
        <Hero />
        <Providers
          selectedProvider={this.state.selectedProvider}
          setProvider={this.setSelectedProvider}
        />
        <Addons addons={this.state.addons} setAddons={this.setAddons} />
        <Generate
          selectedProvider={this.state.selectedProvider}
          addons={this.state.addons}
        />
      </Page>
    );
  }
}
