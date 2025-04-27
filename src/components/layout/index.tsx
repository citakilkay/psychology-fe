import React, { FC, ReactNode, useState } from 'react'
import { Button, Card, Layout } from 'antd';
const { Header, Sider, Content } = Layout;

interface IProps {
    children: ReactNode;
}
const MainLayout: FC<IProps> = (props: IProps): ReturnType<FC> => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <Layout className='layout__main'>
            <Sider
                className='layout__sider'
                trigger={null}
                width={200}
                breakpoint="xl"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}>
                <div className='sider__logo'>
                    <img className='sider__logo' src="/logo_transparent.png" alt="" />
                </div>
            </Sider>
            <Layout>
                <Header className='layout__header'>Header</Header>
                <Content>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout