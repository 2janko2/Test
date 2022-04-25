import { Layout } from "antd";

import classes from "./AppFooter.module.scss";

import logo from "../../assets/img/smtp-logo-reverse.svg";
import classNames from "classnames";

const { Footer } = Layout;

const AppFooter = (props) => {
    return (
        <Footer className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div
                        className={classNames(classes.column, classes.column_1)}
                    >
                        <img
                            src={logo}
                            className={classes.column__logo}
                            alt="SMTP email delivery"
                        />
                        <div className={classes.column__content}>
                            SMTP.com is a premium email delivery and email relay
                            solution that enables you to send and track high
                            volume emails effortlessly.
                        </div>
                        <div className={classes.socials}>
                            <div className={classes.socials__item}>
                                <a
                                    href="https://www.facebook.com/SMTPCOM/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classNames(
                                        classes.socials__link,
                                        classes.socials__link_facebook
                                    )}
                                >
                                    Facebook
                                </a>
                            </div>
                            <div className={classes.socials__item}>
                                <a
                                    href="https://twitter.com/smtpcom"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classNames(
                                        classes.socials__link,
                                        classes.socials__link_twitter
                                    )}
                                >
                                    Twitter
                                </a>
                            </div>
                            <div className={classes.socials__item}>
                                <a
                                    href="https://www.linkedin.com/company/smtp-com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classNames(
                                        classes.socials__link,
                                        classes.socials__link_linkedin
                                    )}
                                >
                                    Linkedin
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className={classNames(classes.column, classes.column_2)}
                    >
                        <div className={classes.column__title}>— SERVICES</div>
                        <div className={classes.services__link}>
                            <a
                                href="https://www.smtp.com/email-api/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Email Relay API
                            </a>
                        </div>
                        <div className={classes.services__link}>
                            <a
                                href="https://www.smtp.com/transactional-email/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Transactional email
                            </a>
                        </div>
                        <div className={classes.services__link}>
                            <a
                                href="https://www.smtp.com/solutions/smtp-for-developers/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SMTP for developers
                            </a>
                        </div>
                        <div className={classes.services__link}>
                            <a
                                href="https://www.smtp.com/solutions/smtp-for-marketers/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SMTP for marketers
                            </a>
                        </div>
                        <div className={classes.services__link}>
                            <a
                                href="https://www.smtp.com/managed-email-delivery-services/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Managed delivery
                            </a>
                        </div>
                    </div>
                    <div
                        className={classNames(classes.column, classes.column_3)}
                    >
                        <div className={classes.column__title}>
                            — GET STARTED
                        </div>
                        <div className={classes.started__item}>
                            <a
                                href="https://www.smtp.com/pricing/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Pricing
                            </a>
                        </div>
                        <div className={classes.started__item}>
                            <a
                                href="https://www.smtp.com/request-quote/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Free Quote
                            </a>
                        </div>
                        <div className={classes.started__item}>
                            <a
                                href="https://www.smtp.com/solutions/smtp-for-startups-students/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SMTP for startups
                            </a>
                        </div>
                        <div className={classes.started__item}>
                            <a
                                href="https://www.smtp.com/resources/api-documentation/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                API documentation
                            </a>
                        </div>
                        <div className={classes.started__item}>
                            <a
                                href="https://www.smtp.com/resources/integrations/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Integrations
                            </a>
                        </div>
                    </div>
                    <div
                        className={classNames(classes.column, classes.column_4)}
                    >
                        <div className={classes.column__title}>— ABOUT</div>
                        <div className={classes.about__item}>
                            <a
                                href="https://www.smtp.com/about-us/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                About us
                            </a>
                        </div>
                        <div className={classes.about__item}>
                            <a
                                href="https://www.smtp.com/why-smtp/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Why SMTP
                            </a>
                        </div>
                        <div className={classes.about__item}>
                            <a
                                href="https://www.smtp.com/contact/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Contact us
                            </a>
                        </div>
                        <div className={classes.about__item}>
                            <a
                                href="https://www.smtp.com/resources/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Resource center
                            </a>
                        </div>
                        <div className={classes.about__item}>
                            <a
                                href="https://www.smtp.com/resources/blog/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Email Deliverability Blog
                            </a>
                        </div>
                    </div>
                    <div
                        className={classNames(classes.column, classes.column_5)}
                    >
                        <div className={classes.column__title}>— LEGAL</div>
                        <div className={classes.legal__item}>
                            <a
                                href="https://www.smtp.com/policies/privacy-policy/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Privacy Policy
                            </a>
                        </div>
                        <div className={classes.legal__item}>
                            <a
                                href="https://www.smtp.com/policies/terms-and-conditions/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Terms and Conditions
                            </a>
                        </div>
                        <div className={classes.legal__item}>
                            <a
                                href="https://www.smtp.com/policies/refund-policy/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Refund Policy
                            </a>
                        </div>
                        <div className={classes.legal__item}>
                            <a
                                href="https://www.smtp.com/policies/partner-program-policy/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Partner program policy
                            </a>
                        </div>
                        <div className={classes.legal__item}>
                            <a
                                href="https://www.smtp.com/policies/code-of-ethics-and-business-conduct/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code of ethics and business
                            </a>
                        </div>
                        <div className={classes.legal__item}>
                            <a
                                href="https://www.smtp.com/policies/acceptable-use-policy/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Acceptable use policy
                            </a>
                        </div>
                    </div>
                </div>

                <div className={classes.copyright}>
                    <div className={classes.copyright__item}>
                        <p className={classes.copyright__text}>
                            ©2022 Ziff Davis, Inc. or its subsidiaries
                            (collectively, “Ziff Davis”).
                        </p>
                        <p className={classes.copyright__text}>
                            All rights reserved. SMTP.com is a trademark or
                            registered trademark of Ziff Davis.
                        </p>
                    </div>

                    <div className={classes.copyright__item}>
                        Made with ❤ in Ottawa, Canada
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default AppFooter;
