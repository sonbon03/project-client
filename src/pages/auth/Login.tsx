import React from "react";
import { Row, Col, Tabs } from "antd";
import bgLogin from "../../assets/images/bg-login.png";
import FormLogin from "./components/FormLogin";
import type { TabsProps } from "antd";
import FormRegister from "./components/FormRegister";

const Login: React.FunctionComponent = () => {
  const items: TabsProps["items"] = [
    {
      key: "login",
      label: "Đăng nhập",
      children: <FormLogin />,
    },
    {
      key: "registor",
      label: "Đăng ký",
      children: <FormRegister />,
    },
  ];
  return (
    <Row gutter={20}>
      <Col span={12}>
        <img src={bgLogin} alt="" className="img-fluid" />
      </Col>
      <Col span={12}>
        <div className="mx-3 my-4">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </Col>
    </Row>
  );
};

export default Login;
