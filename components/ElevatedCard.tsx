import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


type cardItesType = {
    id: number,
    title: string,
    color: string,
}


const cardListItems: cardItesType[] = [
    { id: 1, title: 'Tap', color: 'red' },
    { id: 2, title: 'Tap', color: 'green' },
    { id: 3, title: 'Tap', color: 'blue' },
    { id: 4, title: 'Tap', color: 'pink' },
    { id: 5, title: 'Tap', color: 'gray' },
]



export default function ElevatedCard() {
    return (
        <>
            <View>
                <Text style={styles.heading}>Elevated Cards</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.container}>
                        {
                            cardListItems.map((item) => (
                                <View style={styles.card} key={item.id}>
                                    <Text style={styles.cardText}>{item.title}</Text>
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
        width: 175,
        backgroundColor: '#EFA9AE',
        borderRadius: 4,
        marginHorizontal: 8,
        marginVertical: 10,
        elevation: 6,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowColor: '#000'
    },
    cardText: {
        fontSize: 14,
        fontWeight: 'bold',

    }
})