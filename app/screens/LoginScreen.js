import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
/*
   Import files for use here
 */
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { CardWithActions } from '../components/Card/'

class LoginScreen extends component {
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