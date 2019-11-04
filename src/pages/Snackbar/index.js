//https://github.com/cooperka/react-native-snackbar

//https://www.npmjs.com/package/react-native-snackbar

//https://github.com/cooperka/react-native-snackbar/wiki/Manual-Installation

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native'
import Snackbar from 'react-native-snackbar'

export default function SnackbarScreen() {
    const [code, setCode] = useState('')
    const [dependencies, setDependencies] = useState('')
    const [installation, setInstallation] = useState('')
    const examples = {
        installation: `yarn add react-native-snackbar
react-native link react-native-snackbar

Verificar as alterações listadas em:
https://github.com/cooperka/react-native-snackbar/wiki/Manual-Installation`,
        dependencies: `import Snackbar from 'react-native-snackbar'`,
        code: `Snackbar.show({
    title: 'Hello world',
    duration: Snackbar.LENGTH_SHORT
})`,
        run: () =>  Snackbar.show({
                        title: 'TEXTO...',
                        duration: Snackbar.LENGTH_SHORT,
                    })
    }

    function handlePress() {
        setInstallation(examples.installation)
        setDependencies(examples.dependencies)
        setCode(examples.code)

        examples.run()
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Text style={styles.title}>SNACKBAR</Text>

                <TouchableOpacity onPress={() => handlePress('basic')} style={styles.button}>
                    <Text style={styles.text}>BÁSICO</Text>
                </TouchableOpacity>

            </View>

            <View style={{...styles.codeContainer, display: code ? 'flex' : 'none'}}>
                <Text style={styles.codeInstall}>{installation}</Text>
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
    codeInstall: {
        color: '#F00',
        marginBottom: 15
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
    }
})
