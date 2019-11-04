import React from 'react'
import { Navigator, StatusBar } from 'react-native'

import Routes from './routes'

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#2C2C2C" barStyle="light-content" />
            <Routes />
        </>
    )
}
