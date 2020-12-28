import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import wrapper from "../store/configureStore"
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);