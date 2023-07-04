import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Header, ProductComments } from "../../components";
import styles from "./DetailPage.module.css"
import { Spin, Col, Row, DatePicker, Anchor, Menu, Typography, Divider } from "antd";
import { ProductIntro } from "../../components/productIntro";
import { commentMockData } from "./mockup";

export const DetailPage: React.FC = () => {
    const { touristRouteId } = useParams()
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<any>(null)
    const { RangePicker } = DatePicker
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(
                    `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`,
                    { headers: { "x-icode": "CFC0937C3B3BC4F0" } }
                )
                // debugger
                setData(data.data)
                // debugger
            } catch (error) {
                setError((error as Error).message)
            }
        }
        fetchData()
    }, [])
    if (error) {
        <div>网页错误！！！{error}</div>
    }
    return (
        <>
            {
                data ?
                    (
                        <>
                            <div className={styles["page-full"]}>
                                <Header />
                                <div className={styles["page-content"]}>
                                    {/* 产品简介 与 日期选择 */}
                                    <div className={styles["product-intro-container"]}>
                                        <Row>
                                            <Col span={13}>
                                                <ProductIntro
                                                    title={data.title}
                                                    shortDescription={data.description}
                                                    price={data.originalPrice}
                                                    coupons={data.coupons}
                                                    points={data.points}
                                                    discount={data.price}
                                                    rating={data.rating}
                                                    pictures={data.touristRoutePictures.map(p => p.url)}
                                                />

                                            </Col>
                                            <Col span={11}>
                                                <RangePicker open style={{ marginTop: 20 }} />
                                            </Col>
                                        </Row>
                                    </div>
                                    {/* 锚点菜单 */}
                                    <Anchor className={styles["product-detail-anchor"]}>
                                        <Menu mode="horizontal">
                                            <Menu.Item key="1">
                                                <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
                                            </Menu.Item>
                                            <Menu.Item key="3">
                                                <Anchor.Link href="#fees" title="费用"></Anchor.Link>
                                            </Menu.Item>
                                            <Menu.Item key="4">
                                                <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
                                            </Menu.Item>
                                            <Menu.Item key="5">
                                                <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
                                            </Menu.Item>
                                        </Menu>
                                    </Anchor>
                                    {/* 产品特色 */}
                                    <div id="feature" className={styles["product-detail-container"]}>
                                        <Divider orientation={"center"}>
                                            <Typography.Title level={3}>产品特色</Typography.Title>
                                        </Divider>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: data.features }}
                                            style={{ margin: 50 }}
                                        ></div>
                                    </div>
                                    {/* 费用 */}
                                    <div id="fees" className={styles["product-detail-container"]}>
                                        <Divider orientation={"center"}>
                                            <Typography.Title level={3}>费用</Typography.Title>
                                        </Divider>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: data.fees }}
                                            style={{ margin: 50 }}
                                        ></div>
                                    </div>
                                    {/* 预订须知 */}
                                    <div id="notes" className={styles["product-detail-container"]}>
                                        <Divider orientation={"center"}>
                                            <Typography.Title level={3}>预定须知</Typography.Title>
                                        </Divider>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: data.notes }}
                                            style={{ margin: 50 }}
                                        ></div>
                                    </div>
                                    {/* 商品评价*/}
                                    <div id="comments" className={styles["product-detail-container"]}>
                                        <Divider orientation={"center"}>
                                            <Typography.Title level={3}>用户评价</Typography.Title>
                                        </Divider>
                                        <div style={{ margin: 40 }}>
                                            <ProductComments data={commentMockData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </>
                    ) :
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
    )
}