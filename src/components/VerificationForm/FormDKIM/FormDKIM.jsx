import { InfoCircleOutlined } from "@ant-design/icons/lib/icons";
import { Button, Tooltip } from "antd";
import { useState } from "react";
import classNames from "classnames";

import { verifyDKIM } from "../../../api/api";

import CopyText from "../../common/CopyText/CopyText";

import classes from "./FormDKIM.module.scss";
import ModalWindow from "../ModalWindow/ModalWindow";

function FormDKIM(props) {
    const [error, setError] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onSubmit = async () => {
        try {
            props.setIsLoading(true);
            let dkim = await verifyDKIM();
            props.setDkimVerified(dkim);
        } catch (e) {
            setError(e);
        } finally {
            props.setIsLoading(false);
        }
    };

    const showInstructionModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className={classes.wrapper}>
            <div
                className={classNames(
                    classes.titleWrapper,
                    props.dkimParameterName && classes.titleWrapper_verified
                )}
            >
                <span
                    className={classNames(
                        classes.pagenumber,
                        !props.dkimParameterName && classes.pagenumber_inactive,
                        props.isDkimVerified && classes.pagenumber_verified
                    )}
                >
                    3
                </span>
                <h4
                    className={classNames(
                        classes.title,
                        !props.dkimParameterName && classes.title_inactive
                    )}
                >
                    DKIM Verification
                </h4>
            </div>
            {props.isDkimVerified && (
                <div className={classes.dnsStatusChecked}>Verified</div>
            )}
            {props.dkimParameterName && !props.isDkimVerified && (
                <>
                    <div className={classes.description}>
                        Enter the below DNS host name and TXT value into your
                        DNS provider’s settings page. Once entered click ‘Verify
                        DKIM’.
                    </div>

                    <div className={classes.dns}>
                        <div className={classes.dnsField}>
                            <div className={classes.fieldLabel}>
                                <Tooltip
                                    title={`In rare cases your DNS/domain provider
               may require you to include your domain name in the
                string: ${props.sendingDomain} - ${props.dkimParameterName} 
                If you're uncertain please consult your DNS/domain provider.`}
                                >
                                    <span className={classes.fieldLabelText}>
                                        Name
                                    </span>
                                    <InfoCircleOutlined />
                                </Tooltip>
                            </div>
                            <div className={classes.fieldValue}>
                                {props.dkimParameterName}
                            </div>
                            <div className={classes.copyWrapper}>
                                <CopyText text={props.dkimParameterName} />
                            </div>
                        </div>

                        <div className={classes.dnsField}>
                            <div className={classes.fieldLabel}>TXT value</div>
                            <div className={classes.fieldValue}>
                                {props.dkimParameterValue}
                            </div>
                            <div className={classes.copyWrapper}>
                                <CopyText text={props.dkimParameterValue} />
                            </div>
                        </div>

                        <div className={classes.dnsField}>
                            <div className={classes.fieldLabel}>TTL: 3600</div>
                        </div>
                    </div>

                    <div className={classes.dnsButton}>
                        <Button
                            type="primary"
                            className={classes.dnsVerifyButton}
                            onClick={onSubmit}
                        >
                            Verify DKIM
                        </Button>
                    </div>

                    <div className={classes.instructions}>
                        <div className={classes.instructionsImg}></div>
                        <div
                            className={classes.instructionsText}
                            onClick={showInstructionModal}
                        >
                            email instructions to a teammate instead
                        </div>
                    </div>

                    {error && (
                        <div className={classes.notification}>
                            <div className={classes.notificationContent}>
                                <span className={classes.notificationWarning}>
                                    !
                                </span>
                                <div className={classes.notificationText}>
                                    We were unable to verify that your DKIM
                                    information has been setup correctly with
                                    your DNS provider. Please verify that you’ve
                                    made the appropriate configuration changes
                                    and click “Verify DKIM” to try again.
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={classes.dkimWrapper}>
                        <div className={classes.dkimHelp}>
                            To configure DKIM authentication by using your own
                            public-private key pair, please contact us or{" "}
                            <a
                                href="https://kb.smtp.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                vist help center.
                            </a>
                        </div>
                    </div>
                </>
            )}
            <ModalWindow
                isVisible={isModalVisible}
                setIsVisible={setIsModalVisible}
            />
        </div>
    );
}

export default FormDKIM;
