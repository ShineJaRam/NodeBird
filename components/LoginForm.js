import React, {useState, useCallback, useMemo} from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const LoginForm = () => {
    const [id, setId] = useState('');
    const [passWord, setPassWord] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassWord(e.target.value);
    }, []);

    // const style = useMemo(() => ({marginTop: 10}), [])

    return (
        <Form>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={passWord}
                    onChange={onChangePassword}
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><Button>회원가입</Button></Link>
            </ButtonWrapper>
            <div>

            </div>
        </Form>
    )
}

export default LoginForm;

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;