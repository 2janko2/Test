import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import styles from "./App.module.scss";

import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import VerificationForm from "../VerificationForm/VerificationForm";
import LoginPage from "../LoginPage/LoginPage";

const { Content } = Layout;

function App() {
    const [isAuth, setIsAuth] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let sessionToken = localStorage.getItem("sessionToken");
        sessionToken && setIsAuth(true);
    }, [navigate]);

    return (
        <Layout className={styles.layout}>
            <AppHeader />

            <Content className={styles.layout__content}>
                <div className="container">
                    <Routes>
                        {isAuth ? (
                            <Route path="/" element={<VerificationForm />} />
                        ) : (
                            <Route
                                path="/"
                                element={<Navigate replace to="/login" />}
                            />
                        )}
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </Content>

            <AppFooter />
        </Layout>
    );
}

export default App;
