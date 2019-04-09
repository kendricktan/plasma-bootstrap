import React from "react";
import styled from "styled-components";

const bgImgSrc =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80";

const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("${bgImgSrc}") no-repeat center center fixed;
  filter: brightness(0.5);
`;

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

const selectedGlow = "rgba(45, 226, 230, 0.95)";
const pinkGlow = "rgba(247, 6, 207, 0.95)";

const NextButton = styled.a`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-top: 24px;
  padding: 18px 36px;
  outline: 0;
  border: 2px solid #2de2e6;
  background: transparent;
  color: #2de2e6;
  border-radius: 2px;
  font-size: 24px;
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

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const OptionItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  padding: 12px;
  border: 2px solid ${p => (p.selected ? "#2de2e6" : "#f706cf")};

  color: ${p => (p.selected ? "#2de2e6" : "#f706cf")};

  text-shadow: ${p =>
    p.selected ? `${selectedGlow} 0 0 40px` : `${pinkGlow} 0 0 10px`};
  box-shadow: ${p =>
    p.selected ? `${selectedGlow} 0 0 40px` : `${pinkGlow} 0 0 10px`};
`;

export default class extends React.Component {
  toggleOpt = addonId => () => {
    const { addons } = this.props;
    const alreadySelected = addons.includes(addonId);

    const newAddons = alreadySelected
      ? addons.filter(x => x !== addonId)
      : [...addons, addonId];
    this.props.setAddons(newAddons);
  };

  render() {
    const { addons } = this.props;
    const isSelected = id => addons.includes(id);
    const addonsMsgMap = {
      0: "You have selected 0 addons.",
      1: "You have selected 1 addon.",
      2: "You have selected 2 addons.",
      3: "You have selected 3 addons.",
      4: "You have selected 4 addons.",
    };
    const addonsMsg = addonsMsgMap[addons.length];
    return (
      <Section id="addons">
        <BgImg />
        <HeroContent>
          <Title>Choose your addons:</Title>
          <Subtitle>Choose any addons that you would like!</Subtitle>
          <OptionsContainer>
            <OptionItem
              selected={isSelected("pro")}
              onClick={this.toggleOpt("pro")}
            >
              Prometheus
            </OptionItem>
            <OptionItem
              selected={isSelected("graf")}
              onClick={this.toggleOpt("graf")}
            >
              Grafana
            </OptionItem>
            <OptionItem
              selected={isSelected("alert")}
              onClick={this.toggleOpt("alert")}
            >
              AlertManager
            </OptionItem>
            <OptionItem
              selected={isSelected("ens")}
              onClick={this.toggleOpt("ens")}
            >
              ENS-Webhook
            </OptionItem>
          </OptionsContainer>
          <p>{addonsMsg}</p>
          <NextButton href="#generate">Next</NextButton>
        </HeroContent>
      </Section>
    );
  }
}
