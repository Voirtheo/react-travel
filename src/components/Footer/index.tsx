import React from "react";
import { Layout, Typography } from "antd"

export const Footer: React.FC = () => {
    return (
        <div>
            <Layout.Footer>
                <Typography.Title level={3} style={{ textAlign: 'center' }}>
                    版权所有@voirtheo
                </Typography.Title>
            </Layout.Footer>
        </div>

    )
}