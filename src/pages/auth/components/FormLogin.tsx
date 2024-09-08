import { Button, Col, Input, Row, Form } from "antd";
import React from "react";
import icon from "../../../assets/images/logo-icon.png";
import { useTranslation } from "react-i18next";
import { useLoginMutation } from "../../../redux/queries/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, login } from "../../../redux/slices/auth.slice";
import { listRoleAdmins } from "../../../consts";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormLogin: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const [doLogin, result] = useLoginMutation();
  console.log(doLogin);

  const dispatch = useDispatch();
  const { accessToken, type, user } = useSelector(authSelector);
  const isLogin = !!(accessToken && type && user);
  // const isAdmin =
  //   user?.isAdmin || (user?.roles && listRoleAdmins.includes(user?.roles));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Không được bỏ trống Email"),
      password: Yup.string().required("Không được bỏ trống Mật khẩu"),
    }),
    onSubmit: async (values) => {
      // const result: any = await doLogin({
      //   ...values,
      // });
      // if ("data" in result) {
      //   dispatch(
      //     login({
      //       accessToken: result.data.accessToken,
      //       type: result.data.type,
      //     })
      //   );
      // }
    },
  });

  const [form] = Form.useForm();
  const onFinish = () => {};
  return (
    <div className="d-flex flex-column">
      <Form form={form} onFinish={onFinish} className="flex-grow-1">
        <div className="">
          <label htmlFor="">
            Emai <span className="text-red">*</span>
          </label>
          <Form.Item
            name="email"
            className="form-floating"
            rules={[
              {
                required: true,
                message: "Thông tin bắt buộc",
              },
            ]}
          >
            <Input
              type="text"
              className="form-floating no-icon"
              placeholder="Nhập emai"
            />
          </Form.Item>
        </div>
        <div className="">
          <label htmlFor="">
            Mật khẩu <span className="text-red">*</span>
          </label>
          <Form.Item
            name="password"
            className="form-floating"
            rules={[
              {
                required: true,
                message: "Thông tin bắt buộc",
              },
            ]}
          >
            <Input
              type="password"
              className="form-floating no-icon"
              placeholder="Nhập password"
            />
          </Form.Item>
        </div>
        <div className="">
          <Button type="primary" htmlType="submit" className="w-100">
            Đăng nhập
          </Button>
        </div>
      </Form>
      <div className="">
        <Row gutter={20}>
          <Col span={16}>
            Chào mừng đến với Hệ thống quản lý bán hàng tạp hóa
          </Col>
          <Col span={8}>
            <img src={icon} alt="" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FormLogin;
