import React from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'

const { width, height } = Dimensions.get('window')
const RADIUS = 10

const styles = StyleSheet.create({
    container: {
        height: height * 0.4,
        width: width * 0.9,
        marginBottom: height * 0.05
    },
    cardContent: {
        height: (height * 0.4) * 0.8,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderTopLeftRadius: RADIUS,
        borderTopRightRadius: RADIUS
    },
    cardActions: {
        height: (height * 0.4) * 0.2,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})

const CardWithActions = ({ children }) => (
    <View style={styles.container}>
        <View style={styles.cardContent}>
            {children}
        </View>
        <View style={styles.cardActions}>
        </View>
    </View>
)

export default CardWithActions