//https://facebook.github.io/react-native/docs/toastandroid

import React, { useState } from 'react'
import { StyleSheet, ToastAndroid, TouchableOpacity, Text, View } from 'react-native'

export default function ToastScreen() {
    const [code, setCode] = useState('')
    const [dependencies, setDependencies] = useState('')
    const examples = {
        basic: {
            dependencies: `import { ToastAndroid } from 'react-native'`,
            code: `ToastAndroid.show('TEXTO...', ToastAndroid.SHORT)`,
            run: () => ToastAndroid.show('TEXTO...', ToastAndroid.SHORT)
        },
        top: {
            dependencies: `import { ToastAndroid } from 'react-native'`,
            code:   `ToastAndroid.showWithGravity(
    'TEXTO...',
    ToastAndroid.SHORT,
    ToastAndroid.TOP
)`,
            run: () => {
                ToastAndroid.showWithGravity(
                    'TEXTO...',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP
                )
            }
        },
        center: {
            dependencies: `import { ToastAndroid } from 'react-native'`,
            code:   `ToastAndroid.showWithGravity(
    'TEXTO...',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
)`,
            run: () => {
                ToastAndroid.showWithGravity(
                    'TEXTO...',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                )
            }
        },
        bottom: {
            dependencies: `import { ToastAndroid } from 'react-native'`,
            code:   `ToastAndroid.showWithGravity(
    'TEXTO...',
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM
)`,
            run: () => {
                ToastAndroid.showWithGravity(
                    'TEXTO...',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                )
            }
        }
    }

    function handlePress(gravity) {
        setCode(examples[gravity].code)
        setDependencies(examples[gravity].dependencies)

        examples[gravity].run()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TOAST</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => handlePress('basic')} style={styles.button}>
                    <Text style={styles.text}>BÁSICO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('top')} style={styles.button}>
                    <Text style={styles.text}>TOP</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('center')} style={styles.button}>
                    <Text style={styles.text}>CENTER</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('bottom')} style={styles.button}>
                    <Text style={styles.text}>BOTTOM</Text>
                </TouchableOpacity>
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
    codeContainer: {
        backgroundColor: 'gold',
        padding: 15,
        marginTop: 10
    },
    code: {
        fontSize: 12,
        color: '#2C2C2C'
    },
    codeImport: {
        fontSize: 12,
        color: '#2C2C2C',
        fontWeight: 'bold',
        marginBottom: 15
    }
})
