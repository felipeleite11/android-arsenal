//https://facebook.github.io/react-native/docs/asyncstorage

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default function AsyncStorageScreen() {
    const [code, setCode] = useState('')
    const [dependencies, setDependencies] = useState('')
    const [data, setData] = useState('')
    const [storage, setStorage] = useState('')
    const examples = {
        set: {
            dependencies: `import AsyncStorage from '@react-native-community/async-storage'`,
            code: `async data => await AsyncStorage.setItem('arsenal_key', data)`,
            run: async data => await AsyncStorage.setItem('arsenal_key', data)
        },
        get: {
            dependencies: `import AsyncStorage from '@react-native-community/async-storage'`,
            code: `await AsyncStorage.getItem('arsenal_key')`,
            run: async () => Alert.alert(await AsyncStorage.getItem('arsenal_key'))
        },
        remove: {
            dependencies: `import AsyncStorage from '@react-native-community/async-storage'`,
            code: `await AsyncStorage.removeItem('arsenal_key')`,
            run: async () => await AsyncStorage.removeItem('arsenal_key')
        }
    }

    async function handlePress(mode) {
        setDependencies(examples[mode].dependencies)
        setCode(examples[mode].code)

        examples[mode].run(data)

        const value = await AsyncStorage.getItem('arsenal_key')
        setStorage(value)
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Text style={styles.title}>ASYNC STORAGE</Text>

                <TouchableOpacity onPress={() => handlePress('set')} style={styles.button}>
                    <Text style={styles.text}>SET</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('get')} style={styles.button}>
                    <Text style={styles.text}>GET</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('remove')} style={styles.button}>
                    <Text style={styles.text}>REMOVE</Text>
                </TouchableOpacity>

                <TextInput
                    onChangeText={setData}
                    value={data}
                    style={styles.input}
                />

                <Text style={styles.storage}>{storage}</Text>

            </View>

            <View style={{...styles.codeContainer, display: code ? 'flex' : 'none'}}>
                <Text style={styles.codeImport}>{dependencies}</Text>
                <Text style={styles.code}>{code}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10
    },
    button: {
        backgroundColor: '#2C2C2C',
        paddingVertical: 12,
        width:200,
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        color: '#FFF'
    },
    buttonsContainer: {
        alignItems: 'center'
    },
    codeImport: {
        fontSize: 12,
        color: '#2C2C2C',
        fontWeight: 'bold',
        marginBottom: 15
    },
    codeContainer: {
        backgroundColor: 'gold',
        padding: 15,
        marginTop: 10
    },
    code: {
        fontSize: 12,
        color: '#2C2C2C'
    },
    input: {
        borderWidth: 2,
        borderColor: 'grey',
        width: 200,
        textAlign: 'center'
    },
    storage: {
        borderWidth: 2,
        borderColor: 'red',
        width: 200,
        marginTop: 10,
        padding: 5,
        textAlign: 'center'
    }
})
