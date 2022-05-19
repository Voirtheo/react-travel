import React from "react";
import { Layout, Typography, Divider, Col, Row } from "antd"
import img1 from '../../assets/images/facebook-807588_640.png'
import img2 from '../../assets/images/follow-826033_640.png'
import img3 from '../../assets/images/icon-720944_640.png'
import img4 from '../../assets/images/microsoft-80658_640.png'
import styles from './style.module.css'

export const Footer: React.FC = () => {
    return (
        <div>
            <Divider orientation="left">合作企业</Divider>
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
                    版权所有@voirtheo
                </Typography.Title>
            </Layout.Footer>
        </div>

    )
}