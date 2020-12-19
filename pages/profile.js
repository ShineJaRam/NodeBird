import React from "react"
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
    const follwerList = [{ nickname: '수현' }, { nickname: '천재' }, {nickname: '노드버드 배우기'}]
    const follwingList = [{ nickname: '수현' }, { nickname: '천재' }, {nickname: '노드버드 배우기'}]

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={follwingList}/>
                <FollowList header="팔로워 목록" data={follwerList}/>
            </AppLayout>
        </>
    )
}

export default Profile;