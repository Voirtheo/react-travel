import React, { useTransition } from 'react'
import styles from './style.module.css'
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd"
import { GlobalOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/hooks'
import { LanguageState } from "../../redux/language/languageReducer"
import {
    LanguageActionTypes,
    addLanguageActionCreator,
    changeLanguageActionCreator
} from "../../redux/language/languageActions"
import '../../i18n/configs';
import {useTranslation} from 'react-i18next'

interface State extends LanguageState { }

export const Header: React.FC = () => {
    const nagigate = useNavigate()
    const language = useSelector((state) => state.languageReducer.language)
    const languageList = useSelector((state) => state.languageReducer.languageList)
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation();

    const menuItems = [
        { label: t("header.home_page"), key: '1' },
        { label: t("header.weekend"), key: '2' },
        { label: t("header.group"), key: '3' },
        { label: t("header.backpack"), key: '4' },
        { label: t("header.private"), key: '5' },
        { label: t("header.cruise"), key: '6' },
        { label: t("header.hotel"), key: '7' },
        { label: t("header.local"), key: '8' },
        { label: t("header.theme"), key: '9' },
        { label: t("header.custom"), key: '10' },
        { label: t("header.study"), key: '11' },
        { label: t("header.visa"), key: '12' },
        { label: t("header.enterprise"), key: '13' },
        { label: t("header.high_end"), key: '14' },
        { label: t("header.outdoor"), key: '15' },
        { label: t("header.insurance"), key: '16' },
    ]
    const menuClickHandler = (e)=>{
        console.log(e)
        if(e.key==='new'){
            //处理新语言添加action
            dispatch(addLanguageActionCreator('新语言', 'new_language'))
        }else{
            dispatch(changeLanguageActionCreator(e.key))
        }
    }


    return (
        <div>
            <div className={styles['app-header']}>
                <div className={styles['top-header']}>
                    <div className={styles.inner}>
                        <Typography.Text style={{ fontSize: '12px', marginRight: '15px' }}>{t("header.slogan")}</Typography.Text>
                        <Dropdown
                            overlay={
                                <Menu
                                    onClick={menuClickHandler}
                                    items={languageList.map(l => {
                                        return { label: l.name, key: l.code }
                                    })} />
                            }
                        >
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <GlobalOutlined />
                                    {language === 'zh' ? '中文' : 'English'}
                                    <CaretDownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <div className={styles['button-group']}>
                            <Button type='link' size='small' onClick={() => { nagigate('register') }}>{t("header.register")}</Button>
                            <Button type='link' size='small' onClick={() => { nagigate('signIn') }}>{t("header.signIn")}</Button>
                        </div>
                    </div>
                </div>
                <Layout.Header className={styles['main-header']}>
                    <span onClick={() => { nagigate('/') }}>
                        <img src={logo} alt="logo" className={styles['App-logo']} />
                        <Typography.Title level={3} className={styles.title}>{t("header.title")}</Typography.Title>
                    </span>

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