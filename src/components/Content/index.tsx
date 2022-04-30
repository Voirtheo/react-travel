import React from "react";
import { Carousel, SideMenu } from "../../components";
import styles from './style.module.css'
import { Row, Col } from "antd";

export const Content: React.FC= ()=>{
    return(
      <div className={styles['page-content']}>
          <Row style={{marginTop:20}}>
            <Col span={6}>
                <SideMenu />
            </Col>
            <Col span={18}>
                <Carousel />
            </Col>
          </Row>
      </div>
    )
}