import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const cardListItems = [
    { id: 1, name: 'Red', color: 'red' },
    { id: 2, name: 'Green', color: 'green' },
    { id: 3, name: 'Blue', color: 'blue' },
    { id: 4, name: 'Pink', color: 'pink' },
    { id: 5, name: 'Gray', color: 'gray' },
]

export default function FlatCards() {
    return (
        <>
            <View>
                <Text style={styles.heading}>FlatCards</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.container}>
                        {
                            cardListItems.map((item) => (
                                <View key={item.id} style={{ ...styles.card, backgroundColor: item.color }}>
                                    <Text style={styles.cardText}>{item.name}</Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 4
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        marginHorizontal: 8,
        marginVertical: 10
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',

    }
})