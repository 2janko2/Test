import { Form, Input, Button, Col, Row, Alert, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../api/api";

import classes from "./LoginPage.module.scss";

const LoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("sessionToken")) {
            navigate("/");
        }
    }, [navigate]);

    const onFinish = async (values) => {
        try {
            setIsLoading(true);
            const response = await login(values);
            if (response.status === 200) {
                localStorage.setItem("sessionToken", response.data.data.jwt);
                navigate("/");
            } else {
                setError("Your username or password is not correct");
            }
            // if (response.data.data) {
            //     localStorage.setItem("sessionToken", response.data.data.token);
            //     navigate("/");
            // } else {
            //     setError("Your username or password is not correct");
            // }
        } catch (e) {
            if (e?.response?.status === 401 || e?.response?.status === 422) {
                setError("Your username or password is not correct");
            } else {
                setError(e?.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        // console.log("Failed:", errorInfo);
    };

    return (
        <Spin spinning={isLoading}>
            <Row type="flex" justify="center" className={classes.wrapper}>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Form
                        name="basic"
                        layout={"vertical"}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        {error && (
                            <Form.Item>
                                <Alert
                                    message={error}
                                    type="error"
                                    className={classes.error}
                                />
                            </Form.Item>
                        )}

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Spin>
    );
};

export default LoginPage;
