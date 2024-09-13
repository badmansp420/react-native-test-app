import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MeetScreen() {
    return (
        <View>
            <Text style={styles.headingText}>Meet Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'silver',
        marginBottom: 10
    }
})