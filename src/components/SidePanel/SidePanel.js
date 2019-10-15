import React from "react";
import { Menu, Image } from "semantic-ui-react";

import "./SidePanel.css";

const SidePanel = () => {
  return (
    <Menu
      inverted
      vertical
      style={{
        fontSize: "0.9rem",
        width: "100%",
        background: "#002137",
        textAlign: "center"
      }}
    >
      <Menu.Header style={{ padding: "1rem 0" }}>
        <Image centered src={require(`../../images/logo.png`)} />
      </Menu.Header>

      <Menu.Item
        onClick={() => {}}
        name=""
        // active={channel.id === this.state.activeChannel}
      >
        <Image
          centered
          src={require(`../../images/knowledge.png`)}
          style={{ padding: "0.5rem 0" }}
        />
        База знаний
      </Menu.Item>

      <Menu.Item
        onClick={() => {}}
        name=""
        // active={channel.id === this.state.activeChannel}
      >
        <Image
          centered
          src={require(`../../images/requests.png`)}
          style={{ padding: "0.5rem 0" }}
        />
        Заявки
      </Menu.Item>

      <Menu.Item
        onClick={() => {}}
        name=""
        // active={channel.id === this.state.activeChannel}
      >
        <Image
          centered
          src={require(`../../images/employees.png`)}
          style={{ padding: "0.5rem 0" }}
        />
        Сотрудники
      </Menu.Item>

      <Menu.Item
        onClick={() => {}}
        name=""
        // active={channel.id === this.state.activeChannel}
      >
        <Image
          centered
          src={require(`../../images/customers.png`)}
          style={{ padding: "0.5rem 0" }}
        />
        Клиенты
      </Menu.Item>

      <Menu.Item
        onClick={() => {}}
        name=""
        // active={channel.id === this.state.activeChannel}
      >
        <Image
          centered
          src={require(`../../images/actives.png`)}
          style={{ padding: "0.5rem 0" }}
        />
        Активы
      </Menu.Item>

      <Menu.Item
        onClick={() => {}}
        name=""
        // active={channel.id === this.state.activeChannel}
      >
        <Image
          centered
          src={require(`../../images/settings.png`)}
          style={{ padding: "0.5rem 0" }}
        />
        Настройки
      </Menu.Item>
    </Menu>
  );
};

export default SidePanel;
