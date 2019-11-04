//https://facebook.github.io/react-native/docs/vibration

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Vibration } from 'react-native'

export default function VibrationScreen() {
    const [code, setCode] = useState('')
    const [dependencies, setDependencies] = useState('')
    const examples = {
        fixed: {
            dependencies: `import { Vibration } from 'react-native'`,
            code: `Vibration.vibrate(1000)`,
            run: () =>  Vibration.vibrate(1000)
        },
        pattern: {
            dependencies: `import { Vibration } from 'react-native'`,
            code: `Vibration.vibrate([500, 1000, 300, 1000, 300, 1000, 500])`,
            run: () =>  Vibration.vibrate([500, 1000, 300, 1000, 300, 1000, 500])
        },
        continuous: {
            dependencies: `import { Vibration } from 'react-native'`,
            code: `Vibration.vibrate(1000, true)
...
Vibration.cancel()`, //repeat = true
            run: () => {
                Vibration.vibrate(1000, true)

                setTimeout(() => Vibration.cancel(), 3000)
            }
        }
    }

    function handlePress(mode) {
        setDependencies(examples[mode].dependencies)
        setCode(examples[mode].code)

        examples[mode].run()
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Text style={styles.title}>VIBRATION</Text>

                <TouchableOpacity onPress={() => handlePress('fixed')} style={styles.button}>
                    <Text style={styles.text}>TEMPO FIXO (1000ms)</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('pattern')} style={styles.button}>
                    <Text style={styles.text}>COM PADRÃO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('continuous')} style={styles.button}>
                    <Text style={styles.text}>CONTÍNUO</Text>
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
