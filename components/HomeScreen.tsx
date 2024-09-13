import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native'
import React from 'react';
import FlatCards from './FlatCards';
import ElevatedCard from './ElevatedCard';
import FancyCard from './FancyCard';
import ActionCard from './ActionCard';
import Contacts from './Contacts';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.containerDark}>
                        <Text style={styles.textColor}>React Native</Text>
                    </View>
                    <FlatCards />
                    <ElevatedCard />
                    <FancyCard />
                    <ActionCard />
                    <Contacts />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252503',
    },
    containerDark: {
        backgroundColor: 'gray'
    },
    textColor: {
        margin: 'auto',
        fontSize: 25,
        marginVertical: 20,
        fontWeight: '500',
    }
})
export default HomeScreen;