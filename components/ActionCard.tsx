import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(link: string) {
        Linking.openURL(link);
    }

    return (
        <View>
            <Text style={styles.headerText}>Recent Blogs</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Mastering React Native Animations: A Beginner's Guide
                    </Text>
                    <Image
                        style={styles.cardImage}
                        source={{ uri: 'https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2020/12/22095643/all-about-react-native-apps-776x415-1.png' }} />
                    <Text style={styles.cardSubtitle}>
                        Bringing Your App to Life with Engaging Visual Effects.
                    </Text>
                    <Text style={styles.cardDescription}>
                        Animations are a powerful tool for enhancing user experience and making your React Native app stand out. In this blog post, we'll explore the various techniques and best practices for creating smooth and visually appealing animations. Let's dive in!
                    </Text>
                    <View style={styles.cardButtons}>
                        <TouchableOpacity
                            style={[styles.button, styles.readMore]}
                            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
                            <Text>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.followMe]}
                            onPress={() => openWebsite('https://github.com/badmansp420')}>
                            <Text>Follow Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 4,
        marginTop: 14,
    },
    container: {
        marginVertical: 10,
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: 'auto',
        width: 360,
        backgroundColor: '#292F36',
        padding: 8,
        borderRadius: 10,
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardImage: {
        height: 200,
        marginVertical: 4,
        borderRadius: 4,
    },
    cardSubtitle: {
        marginVertical: 6,
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'semibold',
        padding: 4
    },
    cardDescription: {
        padding: 4,
        fontSize: 14,
        textAlign: 'justify',

    },
    cardButtons: {
        marginVertical: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 6,
    },
    readMore: {
        backgroundColor: '#394648',
    },
    followMe: {
        backgroundColor: '#F79F79',
    },
})