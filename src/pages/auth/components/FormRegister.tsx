import { Button, Form, Input } from "antd";
import React from "react";

const FormRegister: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};
  return (
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
        <label htmlFor="">
          Nhập lại mật khẩu <span className="text-red">*</span>
        </label>
        <Form.Item
          name="password2"
          className="form-floating"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Thông tin bắt buộc",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu nhập lại không khớp với mật khẩu")
                );
              },
            }),
          ]}
        >
          <Input
            type="password"
            className="form-floating no-icon"
            placeholder="Nhập lại mật khẩu"
          />
        </Form.Item>
      </div>
      <div className="">
        <label htmlFor="">
          Tên doanh nghiệp <span className="text-red">*</span>
        </label>
        <Form.Item
          name="name"
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
            placeholder="Nhập tên doanh nghiệp"
          />
        </Form.Item>
      </div>
      {/* <div className="">
        <label htmlFor="">
          Địa chỉ doanh nghiệp <span className="text-red">*</span>
        </label>
        <Form.Item
          name="address"
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
            placeholder="Nhập địa chỉ doanh nghiệp"
          />
        </Form.Item>
      </div> */}
      <div className="">
        <label htmlFor="">
          Số điện thoại <span className="text-red">*</span>
        </label>
        <Form.Item
          name="phone"
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
            placeholder="Nhập số điện thoại"
          />
        </Form.Item>
      </div>
      <div className="">
        <Button type="primary" htmlType="submit" className="w-100">
          Đăng ký
        </Button>
      </div>
    </Form>
  );
};

export default FormRegister;
