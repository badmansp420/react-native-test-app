import React from 'react';
import { StyleSheet, View, Text, useColorScheme, Image } from 'react-native';

const AppPro = () => {

    const isDarkMode = useColorScheme();
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
            <Text style={{ color: 'red' }}>{isDarkMode}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        width: '100%',
        backgroundColor: 'green'
    },

    redText: {
        fontSize: 24,
        fontWeight: 500,
        color: 'red',
        margin: 'auto',
    }
});

export default AppPro;