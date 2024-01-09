import { useState } from 'react';
import { AiOutlineCopy, AiOutlineHome, AiOutlineLogin, AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineUnorderedList, AiOutlineUser } from 'react-icons/ai';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import ContentAll from './ContentAll';
import { useSelector } from 'react-redux';

const { Header, Sider, Content } = Layout;

const MainContent = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {cartItems} = useSelector(state => state.rootReducer)

    return (
        <Layout className="min-h-screen p-3">
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
                <h3 className='text-white text-xl font-bold mt-2 pb-20 text-center'>Jahid POS</h3>
                <div className="flex flex-col items-center  h-full">
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={window.location.pathname}
                        className="text-white pr-5 pt-4"
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
                </div>
            </Sider>
            <Layout>
                <Header className="bg-white mx-3 my-0" style={{ boxShadow: '0 0 3px #ccc', borderRadius: '10px' }}>
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <AiOutlineMenuUnfold className="text-black" />
                            ) : (
                                <AiOutlineMenuFold className="text-black" />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-white text-xl"
                    />
                </Header>
                <Content className="m-3 p-4 bg-white" style={{ boxShadow: '0 0 3px #ccc', borderRadius: '10px' }}>
                    <ContentAll />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainContent;