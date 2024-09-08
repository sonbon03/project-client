import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/layout.css";
import "../src/assets/css/media-screen.css";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Layout from "./layouts";
import { message } from "antd";

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <>
      {contextHolder}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
