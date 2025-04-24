import React, { FC, ReactNode } from 'react'
import { Button, Layout } from 'antd';
const { Header, Sider, Content } = Layout;

interface IProps {
    children: ReactNode;
}
const MainLayout: FC<IProps> = (props: IProps): ReturnType<FC> => {
    return (
        <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header>dwaHeader</Header>
                <Content>dwadsa</Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout