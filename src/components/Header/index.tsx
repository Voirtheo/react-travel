import React from 'react'
import styles from './style.module.css'
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd"
import { GlobalOutlined, CaretDownOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {
    const menuItems = [
        { label: '旅游首页', key: '1' },
        { label: '跟团游', key: '2' },
        { label: '自由行', key: '3' },
        { label: '私家团', key: '4' },
        { label: '游轮', key: '5' },
        { label: '酒店+景点', key: '6' },
        { label: '当地玩乐', key: '7' },
        { label: '主题游', key: '8' },
        { label: '定制游', key: '9' },
        { label: '游学', key: '10' },
        { label: '签证', key: '11' },
        { label: '企业游', key: '12' },
        { label: '高端游', key: '13' },
        { label: '爱玩户外', key: '14' },
        { label: '保险', key: '15' },
        { label: '周末游', key: '16' },
    ]
    return (
        <div>
            <div className={styles['app-header']}>
                <div className={styles['top-header']}>
                    <div className={styles.inner}>
                        <Typography.Text style={{ fontSize: '12px', marginRight: '15px' }}>让旅游更幸福</Typography.Text>
                        <Dropdown
                            overlay={
                                <Menu items={[
                                    { label: '中文', key: '1' },
                                    { label: 'English', key: '2' }
                                ]} />
                            }
                        >
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <GlobalOutlined />
                                    Language
                                    <CaretDownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <div className={styles['button-group']}>
                            <Button type='link' size='small'>注册</Button>
                            <Button type='link' size='small'>登录</Button>
                        </div>
                    </div>
                </div>
                <Layout.Header className={styles['main-header']}>
                    <img src={logo} alt="logo" className={styles['App-logo']} />
                    <Typography.Title level={3} className={styles.title}>React 旅游网</Typography.Title>
                    <Input.Search
                        placeholder='请输入目的地、主题'
                        className={styles['search-input']}
                    />
                </Layout.Header>
                <Menu
                    mode='horizontal'
                    className={styles['main-menu']}
                    items={menuItems} />
            </div>
            
        </div>
    )
}
// export default Header;