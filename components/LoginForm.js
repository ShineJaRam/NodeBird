import React, {useCallback, useMemo} from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user"
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    // const style = useMemo(() => ({marginTop: 10}), [])
    
    const onSubmitForm = useCallback(() => {
        console.log(id, password) 
        dispatch(loginAction({id, password}))
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
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
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><Button>회원가입</Button></Link>
            </ButtonWrapper>
            <div>

            </div>
        </FormWrapper>
    )
}

export default LoginForm;

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;