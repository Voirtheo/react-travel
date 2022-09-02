import React from "react";
import { Layout, Typography, Divider, Col, Row } from "antd"
import img1 from '../../assets/images/facebook-807588_640.png'
import img2 from '../../assets/images/follow-826033_640.png'
import img3 from '../../assets/images/icon-720944_640.png'
import img4 from '../../assets/images/microsoft-80658_640.png'
import styles from './style.module.css'
import "../../i18n/configs"
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
    const { t, i18n } = useTranslation()
    return (
        <div>
            <Divider orientation="left">{t("home_page.joint_venture")}</Divider>
            <Row>
                <Col span={6}>
                    <img src={img4} alt="" className={styles['foot-image']} />
                </Col>
                <Col span={6}>
                    <img src={img3} alt="" className={styles['foot-image']} />
                </Col>
                <Col span={6}>
                    <img src={img1} alt="" className={styles['foot-image']} />
                </Col>
                <Col span={6}>
                    <img src={img2} alt="" className={styles['foot-image']} />
                </Col>
            </Row>
            <Layout.Footer>
                <Typography.Title level={3} style={{ textAlign: 'center' }}>
                    {t("footer.detail")}
                </Typography.Title>
            </Layout.Footer>
        </div>

    )
}