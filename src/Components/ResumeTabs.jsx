import React from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TabButton = styled.button`
  background: ${(props) => (props.active ? "#34c759" : "#333")};
  color: ${(props) => (props.active ? "#fff" : "#bbb")};
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #34c759;
    color: #fff;
  }
`;

const ResumeTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Experience", "Education", "Skills", "AboutMe"];

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
          {tab}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default ResumeTabs;
