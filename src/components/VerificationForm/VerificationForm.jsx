import { Button, Typography, Spin } from "antd";
import { useState } from "react";

import classes from "./VerificationForm.module.scss";

import FormDKIM from "./FormDKIM/FormDKIM";
import FormDomain from "./FormDomain/FormDomain";
import FormSPF from "./FormSPF/FormSPF";

const { Title } = Typography;

const VerificationForm = () => {
    const [sendingDomain, setSendingDomain] = useState("");
    const [isDomainEditing, setIsDomainEditing] = useState(true);
    const [spfParameter, setSpfParameter] = useState({});
    const [dkimParameter, setDkimParameter] = useState("");
    const [isDkimVerified, setDkimVerified] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onEditClick = () => {
        setDkimParameter("");
        setSpfParameter({});
        setIsDomainEditing(true);
    };

    return (
        <Spin spinning={isLoading}>
            <div className={classes.wrapper}>
                <div className="">
                    <Title level={1} className={classes.title}>
                        Account Setup
                    </Title>

                    <p className={classes.description}>
                        To get your account up and running, it's important that
                        you have access to your{" "}
                        <a
                            href="https://kb.smtp.com/"
                            target="_blank"
                            rel="noreferrer"
                            className={classes.link}
                        >
                            DNS provider
                        </a>{" "}
                        and complete the following steps
                    </p>
                </div>

                <FormDomain
                    sendingDomain={sendingDomain}
                    setSpfParameter={setSpfParameter}
                    isDkimVerified={isDkimVerified.dkimStatus}
                    setSendingDomain={setSendingDomain}
                    setIsLoading={setIsLoading}
                    setIsDomainEditing={setIsDomainEditing}
                    onEditClick={onEditClick}
                    isDomainEditing={isDomainEditing}
                />

                <FormSPF
                    sendingDomain={sendingDomain}
                    setIsLoading={setIsLoading}
                    spfParameter={spfParameter.spf}
                    dkimParameter={dkimParameter}
                    setDkimParameter={setDkimParameter}
                />

                <FormDKIM
                    sendingDomain={sendingDomain}
                    dkimParameterName={dkimParameter.dnsName}
                    dkimParameterValue={dkimParameter.dnsValue}
                    setDkimVerified={setDkimVerified}
                    isDkimVerified={isDkimVerified.dkimStatus}
                    setIsLoading={setIsLoading}
                />

                {isDkimVerified && (
                    <div className={classes.congratsWrapper}>
                        <div className={classes.congratsTitle}>
                            Congrats, your account is ready to use!
                        </div>

                        <div className={classes.congratsSubtitle}>
                            You have successfully verified your DKIM and SPF
                            record and can now start sending emails safely.
                        </div>

                        <Button type="primary" size={"large"} htmlType="submit">
                            <a
                                href="https://my.smtp.com/login"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Go to Dashboard
                            </a>
                        </Button>
                    </div>
                )}
            </div>
        </Spin>
    );
};

export default VerificationForm;
