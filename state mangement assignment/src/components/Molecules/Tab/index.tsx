import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import TypoIcon from "../TypoIcon";
import { ReactComponent as Home } from "../../Atoms/Icons/home.svg";
import { ReactComponent as Cash } from "../../Atoms/Icons/cashA.svg";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  background-color: white;
  width: 210px;
  height: 505px;
  background: #201f24;
  border-right: 1px solid #222124;
  border-radius: 0px;
  flex: none;
  order: 1;
  flex-grow: 1;

  .active {
    width: 210px;
    height: 49px;
    background: #413f4d;
    border: 1px solid #413f4d;
    border-radius: 12px;
  }
`;

export default function VerticalTabs() {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [isActive1, setIsActive1] = React.useState<boolean>(false);

  function handleClick() {
    setIsActive((isActive) => (isActive = true));
    if (isActive1 == true) {
      setIsActive1((isActive1) => !isActive1);
    }
  }

  function handleClick1() {
    setIsActive1((isActive1) => (isActive1 = true));
    if (isActive == true) {
      setIsActive((isActive) => !isActive);
    }
  }

  let toggleClassCheck = isActive ? "active" : "";
  let toggleClassCheck1 = isActive1 ? "active" : "";

  return (
    <Div>
      <Tabs
        orientation="vertical"
        aria-label="SideBar"
        TabIndicatorProps={{
          style: {
            height: 0,
          },
        }}
      >
        <Tab
          onClick={handleClick}
          className={`${toggleClassCheck}`}
          label={
            <TypoIcon
              icon={<Home />}
              
              variant="subtitle2"
              reverse={false}
            >
              Home
            </TypoIcon>
          }
        />

        <Tab
          onClick={handleClick1}
          className={`${toggleClassCheck1}`}
          label={
            <TypoIcon
              icon={<Cash />}
              
              variant="subtitle2"
              reverse={false}
            >
              Cash Accleration
            </TypoIcon>
          }
        />
      </Tabs>
    </Div>
  );
}
