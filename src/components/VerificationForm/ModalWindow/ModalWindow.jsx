import { useState } from "react";
import { Modal, Form, Input, Button, Spin } from "antd";

import { sendInstructions } from "../../../api/api";

const ModalWindow = (props) => {
    const { isVisible, setIsVisible } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [isInstructionSubmitted, setIsInstructionSubmitted] = useState(false);
    const [emailToTeammate, setEmailToTeammate] = useState("");

    const [form] = Form.useForm();

    const handleOk = () => {
        setIsVisible(false);
        setIsInstructionSubmitted(false);
    };

    const handleCancel = () => {
        setIsVisible(false);
    };

    const onFinish = async () => {
        try {
            setIsLoading(true);
            const validationValues = await form.validateFields();
            await sendInstructions(validationValues);
            setIsInstructionSubmitted(true);
            let email = form.getFieldValue("email");
            setEmailToTeammate(email);
        } catch (e) {
            console.log("Validate Failed:", e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            visible={isVisible}
            title="Email instructions"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={isLoading}
                    onClick={isInstructionSubmitted ? handleOk : onFinish}
                >
                    {isInstructionSubmitted ? "Ok" : "Send"}
                </Button>,
            ]}
        >
            <Spin spinning={isLoading}>
                {isInstructionSubmitted ? (
                    <div>
                        <p>
                            The instructions have been successfully sent to:{" "}
                            {emailToTeammate}
                        </p>
                        <p>
                            Once the setup has been completed you can return
                            here and proceed with verification.
                        </p>
                    </div>
                ) : (
                    <Form
                        name="basic"
                        form={form}
                        layout={"vertical"}
                        onFinish={onFinish}
                    >
                        <p>
                            To send the DKIM and SPF setup instructions to a
                            teammate or colleague please provide their email
                            address below
                        </p>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    required: true,
                                    message: "Email address is invalid.",
                                },
                            ]}
                        >
                            <Input placeholder="john@foobar.com" />
                        </Form.Item>
                    </Form>
                )}
            </Spin>
        </Modal>
    );
};

export default ModalWindow;
