import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import styled from "styled-components";

import UserProfile from "../components/UserProfile"
import LoginForm from "../components/LoginForm"

const AppLayout = ({ children }) => {
    const [isLoggedIn] = useState(false)

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">노드버드</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={ 8 }>
                <Col xs={24} md={6}>
                    { isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://shinejaram.tistory.com/" target="_blank" rel="_noreferrer noopener">made by suhyun</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired
}


export default AppLayout;

const SearchInput = styled(Input.Search)`
    vertical-align: 'middle'
`;