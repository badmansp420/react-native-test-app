import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import React, { Component } from 'react';

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.heading}>Top Topics</Text>
            <View style={styles.container}>
                <ScrollView horizontal={true}>
                    <View style={styles.card}>
                        <Image
                            source={{
                                uri: 'https://reactjs.org/logo-og.png',
                                cache: 'only-if-cached',
                            }}
                            style={styles.image} />


                        <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur officia excepturi vel eum sapiente commodi beatae velit, non dolore!</Text>
                    </View>
                    <View style={styles.card}>
                        <Image
                            source={{
                                uri: 'https://reactjs.org/logo-og.png',
                                cache: 'only-if-cached',
                            }}
                            style={styles.image} />


                        <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur officia excepturi vel eum sapiente commodi beatae velit, non dolore!</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        margin: 'auto',
        // backgroundColor: '#A0CFD3',
        marginTop: 40,

    },
    card: {
        position: 'relative',
        height: 300,
        width: 400,
        margin: 'auto',
    },
    image: {
        margin: 'auto',
        height: 300,
        width: 360,
        objectFit: 'cover',
        borderRadius: 10,
        opacity: 0.5
    },
    cardText: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        color: '#ffffff',
        padding: 10,
        textAlign: 'justify',
        fontSize: 16,
        marginHorizontal: 50
    }
})