import React from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native'

export default function ListScreen({ navigation }) {

    const data = [
        { name: 'Toast' },
        { name: 'Snackbar' },
        { name: 'DatetimePicker' },
        { name: 'Notification' },
        { name: 'Vibration' },
        { name: 'Alert' },
        { name: 'AsyncStorage' },
        { name: 'Animation' },
        // { name: 'TTS' }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.name)} style={styles.button}>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid'
    },
    text: {
        color: '#2C2C2C',
        fontSize: 18
    }
})
