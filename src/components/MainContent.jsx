import { useState } from 'react';
import { AiOutlineCopy, AiOutlineHome, AiOutlineLogin, AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineUnorderedList, AiOutlineUser } from 'react-icons/ai';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainContent = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className="min-h-screen p-3" >
            <Sider
                trigger={null} collapsible collapsed={collapsed}
                style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    className="text-white p-4"
                    style={{ minHeight: '95vh' }}
                >
                    <Menu.Item key="/" icon={<AiOutlineHome className="w-5 h-5 text-black" />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/bills" icon={<AiOutlineCopy className="w-5 h-5" />}>
                    <Link to='/bills'>Bills</Link>
                    </Menu.Item>
                    <Menu.Item key="/items" icon={<AiOutlineUnorderedList className="w-5 h-5" />}>
                    <Link to='/items'> Items</Link>
                    </Menu.Item>
                    <Menu.Item key="/customers" icon={<AiOutlineUser className="w-5 h-5" />}>
                    <Link to='/customers'>Customers</Link>
                    </Menu.Item>
                    <Menu.Item key="/logout" icon={<AiOutlineLogin className="w-5 h-5" />}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-white mx-3 my-0 " style={{ boxShadow: '0 0 3px #ccc', borderRadius: '10px'}}>
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <AiOutlineMenuUnfold className="text-black " />
                            ) : (
                                <AiOutlineMenuFold className="text-black" />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-white text-xl w-16 h-16"
                    />
                </Header>
                <Content className="m-3 p-4 min-h-64 bg-white" style={{ boxShadow: '0 0 3px #ccc', borderRadius: '10px' }}>
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainContent;
