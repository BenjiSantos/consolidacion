import React, { Component } from 'react'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { CardWithActions } from '../components/Card'
import SplashScreen from 'react-native-splash-screen'

class LoginScreen extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <Container>
                <Logo version="1" />
                <CardWithActions>
                </CardWithActions>
            </Container>
        )
    }
}

export default LoginScreen