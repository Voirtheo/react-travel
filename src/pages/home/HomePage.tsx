import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Spin } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { fetchDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions";
import { Carousel, SideMenu, Header, Footer, ProductCollection } from "../../components";
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import styles from './HomePage.module.css'





export const HomePage:React.FC = () => {
    const { t } = useTranslation()
    const productList = useSelector(state =>state.recommendProducts.productList)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchDataActionCreator(dispatch)()
    }, [])


    return (
        <>
            <Header />
            <>
                {
                    productList[0] ?
                        (<div className={styles['page-content']}>
                            <Row style={{ marginTop: 20 }}>
                                <Col span={6}>
                                    <SideMenu />
                                </Col>
                                <Col span={18}>
                                    <Carousel />
                                </Col>
                            </Row>
                            <ProductCollection
                                title={<Typography.Title level={3} type="warning">{t("home_page.hot_recommended")}</Typography.Title>}
                                sideImage={sideImage}
                                products={productList[0].touristRoutes}
                            />
                            <ProductCollection
                                title={<Typography.Title level={3} type="danger">{t("home_page.new_arrival")}</Typography.Title>}
                                sideImage={sideImage2}
                                products={productList[1].touristRoutes}
                            />
                            <ProductCollection
                                title={<Typography.Title level={3} type="success">{t("home_page.domestic_travel")}</Typography.Title>}
                                sideImage={sideImage3}
                                products={productList[2].touristRoutes}
                            />
                            <Footer />
                        </div>)
                        :
                        (<Spin
                            size="large"
                            style={{
                                marginTop: 200,
                                marginBottom: 200,
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "100%"
                            }} />)
                }
            </>


        </>
    )
}

