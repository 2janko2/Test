import { Form, Input, Button } from "antd";
import classNames from "classnames";

import { sendDomain } from "../../../api/api";

import classes from "./FormDomain.module.scss";

function FormDomain(props) {
    let doesDomainExistAndIsNotEditing =
        props.sendingDomain && !props.isDomainEditing;

    function validateURL(url) {
        const pattern = new RegExp(
            "^(https?:\\/\\/)?" + // protocol
                "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
                "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
                "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
                "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                "(\\#[-a-z\\d_]*)?$", // fragment locator
            "i"
        );
        return !!pattern.test(url);
    }

    validateURL("https://stackoverflow.com/");
    validateURL("stackoverflow.com/");

    const onSubmit = async (values) => {
        try {
            props.setIsLoading(true);
            let spfVerificationResults = await sendDomain(values);
            props.setSendingDomain(values.domain);
            props.setSpfParameter(spfVerificationResults);
            props.setIsDomainEditing(false);
        } catch (e) {
            console.log(e);
        } finally {
            props.setIsLoading(false);
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.titleWrapper}>
                <span
                    className={classNames(
                        classes.pagenumber,
                        doesDomainExistAndIsNotEditing &&
                            classes.pagenumber_verified
                    )}
                >
                    1
                </span>
                <h4 className={classes.title}>Sending Domain</h4>
            </div>

            {doesDomainExistAndIsNotEditing && (
                <div className={classes.domainWrapper}>
                    <div className={classes.domain}>{props.sendingDomain}</div>
                    {!props.isDkimVerified && (
                        <Button
                            type="link"
                            className={classes.editBtn}
                            onClick={props.onEditClick}
                        >
                            Edit
                        </Button>
                    )}
                </div>
            )}

            {props.isDomainEditing && (
                <Form
                    name="domain"
                    initialValues={{
                        domain: props.sendingDomain,
                    }}
                    className={classes.form}
                    onFinish={onSubmit}
                >
                    <div className={classes.inputLabel}>
                        What is your sending domain?
                    </div>
                    <div className={classes.inputWrapper}>
                        <Form.Item
                            name="domain"
                            className={classes.input}
                            rules={[
                                () => ({
                                    validator(_, value) {
                                        if (validateURL(value)) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("Type correct URL")
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input placeholder="website URL" />
                        </Form.Item>

                        <Form.Item className={classes.submitWrapper}>
                            <Button type="primary" htmlType="submit">
                                Next
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            )}
        </div>
    );
}

export default FormDomain;
