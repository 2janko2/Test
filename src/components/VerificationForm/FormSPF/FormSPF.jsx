import { Button } from "antd";
import { useState } from "react";

import CopyText from "../../common/CopyText/CopyText";

import classes from "./FormSPF.module.scss";

import { verifySpfParameter } from "../../../api/api";
import classNames from "classnames";
import ModalWindow from "../ModalWindow/ModalWindow";

function FormSPF(props) {
    const [error, setError] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onSubmit = async (e) => {
        try {
            props.setIsLoading(true);
            let dkimData = await verifySpfParameter();
            props.setDkimParameter(dkimData);
        } catch (e) {
            setError(e);
        } finally {
            props.setIsLoading(false);
        }
    };

    return (
        <div className={classes.wrapper}>
            <div
                className={classNames(
                    classes.titleWrapper,
                    props.spfParameter && classes.titleWrapper_verified
                )}
            >
                <span
                    className={classNames(
                        classes.pagenumber,
                        !props.spfParameter && classes.pagenumber_inactive,
                        props.dkimParameter && classes.pagenumber_verified
                    )}
                >
                    2
                </span>
                <h4
                    className={classNames(
                        classes.title,
                        !props.spfParameter && classes.title_inactive
                    )}
                >
                    SPF Record Verification
                </h4>
            </div>

            {props.dkimParameter && (
                <div className={classes.spfStatusChecked}>Verified</div>
            )}
            {props.spfParameter && !props.dkimParameter && (
                <>
                    <div className={classes.subtitle}>
                        We've checked and it doesn't look like you have SPF set
                        up. Please add the following record in your DNS
                        provider’s settings, then click Verify SPF.
                    </div>

                    <div className={classes.spf}>
                        <div className={classes.spfField}>
                            <div className={classes.fieldLabel}>
                                SPF record value
                            </div>
                            <div className={classes.fieldValue}>
                                {props.spfParameter}
                            </div>
                            <div className={classes.copyWrapper}>
                                <CopyText text={props.spf} />
                            </div>
                        </div>
                    </div>

                    <div className={classes.spfButton}>
                        <Button
                            type="primary"
                            className={classes.spfVerifyButton}
                            onClick={onSubmit}
                        >
                            Verify SPF
                        </Button>
                    </div>

                    <div className={classes.instructions}>
                        <div className={classes.instructionsImg}></div>
                        <div
                            className={classes.instructionsText}
                            onClick={() => setIsModalVisible(true)}
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
                                    We were unable to verify that your SPF
                                    information has been set up correctly with
                                    your DNS provider. Please verify that you’ve
                                    made the appropriate configuration changes
                                    and click “Verify SPF” to try again.
                                </div>
                            </div>
                        </div>
                    )}
                    <ModalWindow
                        isVisible={isModalVisible}
                        setIsVisible={setIsModalVisible}
                    />
                </>
            )}
        </div>
    );
}

export default FormSPF;
