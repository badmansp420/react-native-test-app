import { Image, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const contacts = [
    {
        id: 1,
        name: 'Protik Sarkar',
        image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1725130846~exp=1725134446~hmac=f0a30d0f5005168e6943489b77580314c4b041c205214e117669e6fb0c3ad1b0&w=996'
    },
    {
        id: 2,
        name: 'Shyam Das',
        image: 'https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=996&t=st=1725132862~exp=1725133462~hmac=744a64ea05c927986de9af36bbe12f8683707141166bc8886a2be41bcf8c0066'
    },
    {
        id: 3,
        name: 'Ravi Kumar Yadav',
        image: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2025722504.1725131354&semt=ais_hybrid'
    },
    {
        id: 4,
        name: 'Fake Man',
        image: 'https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393647.jpg?ga=GA1.1.2025722504.1725131354&semt=ais_hybrid'
    },
    {
        id: 5,
        name: 'Rajdeep Dautta',
        image: 'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?ga=GA1.1.2025722504.1725131354&semt=ais_hybrid'
    },
    {
        id: 6,
        name: 'Subhankar Sarkar',
        image: 'https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?t=st=1725133001~exp=1725136601~hmac=d6019598c355fcd30cd02ffcacd6b54e5227b21cc4728018f3e4f2a2bbecd1f2&w=996'
    },

]


export default function Contacts() {
    return (
        <View>
            <Text style={styles.headingText}>Contacts</Text>
            <View style={styles.container}>
                {
                    contacts.map((item) => (
                        <View style={styles.card} key={item.id}>
                            <Image style={styles.cardImage}
                                source={{ uri: item.image }} />
                            <View>
                                <Text style={styles.cardTitle}>
                                    {item.name}
                                </Text>
                                <Button

                                    onPress={() => {
                                        console.log('You tapped the button!');
                                    }}
                                    title="Contact Me"
                                />
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 6,
        marginHorizontal: 4,
    },
    container: {
        marginVertical: 10,

    },
    card: {
        height: 100,
        width: '95%',
        backgroundColor: '#ACBEA3',
        margin: 'auto',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginVertical: 6,

    },
    cardImage: {
        height: 85,
        width: 85,
        borderRadius: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        objectFit: 'cover'
    },
    cardTitle: {
        fontSize: 26,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    button: {
        width: 100
    }
})