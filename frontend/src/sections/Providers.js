import React from "react";
import styled from "styled-components";

import AwsIcon from "../../assets/aws.svg";
import GcpIcon from "../../assets/gcp.svg";
import AzureIcon from "../../assets/azure.svg";

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HeroContent = styled.div`
  z-index: 1;
  max-width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: #f706cf;
  text-align: center;
  text-shadow: rgba(247, 6, 207, 0.95) 0 0 40px;
`;

const Subtitle = styled.h4`
  text-align: center;
`;

const Providers = styled.div`
  display: flex;
`;

const selectedGlow = "rgba(45, 226, 230, 0.95)";
const pinkGlow = "rgba(247, 6, 207, 0.95)";

const ProviderItem = styled.div`
  color: ${p => (p.selected ? "#2de2e6" : "#f706cf")};
  cursor: pointer;
  height: 180px;
  width: 180px;
  border: 2px solid ${p => (p.selected ? "#2de2e6" : "#f706cf")};
  border-radius: 2px;
  text-shadow: ${p =>
    p.selected ? `${selectedGlow} 0 0 40px` : `${pinkGlow} 0 0 40px`};
  box-shadow: ${p =>
    p.selected ? `${selectedGlow} 0 0 40px` : `${pinkGlow} 0 0 40px`};
  margin: 20px;

  &:hover {
    box-shadow: ${p => (p.selected ? selectedGlow : pinkGlow)} 0 0 40px;
  }

  &:active {
    color: white;
    border-color: white;
    text-shadow: white 0 0 40px;
    box-shadow: white 0 0 40px;
  }

  // background: rgba(255, 255, 255, 0.1);

  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Selected = styled.div`
  font-size: 24px;
`;

const providerMap = {
  aws: "Amazon Web Services",
  gcp: "Google Cloud Platform",
  azure: "Microsoft Azure",
  baremetal: "Bare Metal",
};

const ProviderLabel = styled.span`
  color: #2de2e6;
`;

export default class extends React.Component {
  setProvider = providerId => () => {
    this.props.setProvider(providerId);
  };
  render() {
    const { selectedProvider } = this.props;
    return (
      <Section id="providers">
        <HeroContent>
          <Title>Choose a provider</Title>
          <Subtitle>
            Choose a provider that you like. Any of these will do!
          </Subtitle>
          <Providers>
            <ProviderItem
              onClick={this.setProvider("aws")}
              selected={selectedProvider === "aws"}
            >
              <AwsIcon />
            </ProviderItem>
            <ProviderItem
              onClick={this.setProvider("gcp")}
              selected={selectedProvider === "gcp"}
            >
              <div
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
                <GcpIcon
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "100%",
                    width: "100%",
                  }}
                  viewBox="0 0 512 512"
                />
              </div>
            </ProviderItem>
            <ProviderItem
              onClick={this.setProvider("azure")}
              selected={selectedProvider === "azure"}
            >
              <div
                style={{ position: "relative", height: "100%", width: "100%" }}
              >
                <AzureIcon
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
            </ProviderItem>
            <ProviderItem
              onClick={this.setProvider("baremetal")}
              selected={selectedProvider === "baremetal"}
              style={{ fontFamily: "megrim", fontSize: "48px" }}
            >
              BARE METAL
            </ProviderItem>
          </Providers>
          <Selected>
            {selectedProvider ? (
              <div>
                Selected provider:{" "}
                <ProviderLabel>{providerMap[selectedProvider]}</ProviderLabel>
              </div>
            ) : (
              <div>Please select a provider</div>
            )}
          </Selected>
        </HeroContent>
      </Section>
    );
  }
}
