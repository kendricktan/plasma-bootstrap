import React from "react";
import styled from "styled-components";

const bgImgSrc =
  "https://images.unsplash.com/photo-1514771206769-bd41b0138cc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("${bgImgSrc}") no-repeat center center fixed;
  filter: brightness(0.1);
`;

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  z-index: 1;
  max-width: 80%;
  text-align: center;
`;

const GenerateButton = styled.a`
  font-family: "megrim";
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-top: 24px;
  padding: 36px 64px;
  outline: 0;
  border: 2px solid #2de2e6;
  background: transparent;
  color: #2de2e6;
  border-radius: 2px;
  font-size: 48px;
  text-shadow: rgba(45, 226, 230, 0.95) 0 0 40px;
  box-shadow: rgba(45, 226, 230, 0.65) 0 0 10px;
  visibility: ${p => (p.disabled ? "hidden" : "auto")};

  &:hover {
    box-shadow: rgba(45, 226, 230, 0.95) 0 0 40px;
  }

  &:active {
    color: white;
    border-color: white;
    text-shadow: white 0 0 40px;
    box-shadow: white 0 0 40px;
  }
`;

const addonsMap = {
  pro: "Prometheus",
  graf: "Grafana",
  alert: "AlertManager",
  ens: "ENS-Webhook",
};

const providerMap = {
  aws: "Amazon Web Services",
  gcp: "Google Cloud Platform",
  azure: "Microsoft Azure",
  baremetal: "Bare Metal",
};

const Hl = styled.span`
  color: #2de2e6;
`;

export default class extends React.Component {
  render() {
    const { selectedProvider, addons } = this.props;
    const providerMsg = <Hl>{providerMap[selectedProvider]}</Hl>;

    let addonsMsg = <span>no addons.</span>;
    if (addons.length === 1) {
      addonsMsg = (
        <span>
          <Hl>{addonsMap[addons[0]]}</Hl>.
        </span>
      );
    } else if (addons.length === 2) {
      addonsMsg = (
        <span>
          <Hl>{addonsMap[addons[0]]}</Hl> and <Hl>{addonsMap[addons[1]]}</Hl>.
        </span>
      );
    } else if (addons.length === 3) {
      addonsMsg = (
        <span>
          <Hl>{addonsMap[addons[0]]}</Hl>, <Hl>{addonsMap[addons[1]]}</Hl>, and{" "}
          <Hl>{addonsMap[addons[2]]}</Hl>.
        </span>
      );
    } else if (addons.length === 4) {
      addonsMsg = (
        <span>
          <Hl>{addonsMap[addons[0]]}</Hl>, <Hl>{addonsMap[addons[1]]}</Hl>,{" "}
          <Hl>{addonsMap[addons[2]]}</Hl>, and <Hl>{addonsMap[addons[3]]}</Hl>.
        </span>
      );
    }
    return (
      <Section id="generate">
        <BgImg />
        <Content>
          <GenerateButton>GENERATE</GenerateButton>
          <p>
            This script will generate a Plasma app on {providerMsg} with{" "}
            {addonsMsg}
          </p>
        </Content>
      </Section>
    );
  }
}
