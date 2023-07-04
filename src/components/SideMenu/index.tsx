import React from "react";
import styles from './style.module.css'
import { sideMenuList } from "./mockup";
import { Menu, MenuProps } from "antd";
import { GifOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from 'uuid';

export const SideMenu: React.FC = () => {
    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }
    const items: MenuItem[] =
        sideMenuList.map((m, index) => (
            getItem(
                
                m.title,
                `main-${index}`,
                <GifOutlined key={uuidv4()}/>,
                m.subMenu.map((sm, smindex) => (
                    getItem(
                        sm.title,
                        `sub-${smindex}`,
                        <GifOutlined key={uuidv4()}/>,
                        sm.subMenu.map((sms, smsindex) => (
                            getItem(sms, `sub-sub-${smsindex}`)))
                    )
                ))
            )
        ))

    return (
        <Menu mode="vertical" className={styles['side-menu']} items={items}  />
    )
}