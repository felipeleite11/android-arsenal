//https://facebook.github.io/react-native/docs/alert

import React, { useState } from 'react'
import { StyleSheet, Alert, TouchableOpacity, Text, View } from 'react-native'

export default function AlertScreen() {
    const [code, setCode] = useState('')
    const [dependencies, setDependencies] = useState('')
    const examples = {
        basic: {
            dependencies: `import { Alert } from 'react-native'`,
            code: `Alert.alert('Título', 'Mensagem...')`,
            run: () => Alert.alert('TEXTO')
        },
        withActions: {
            dependencies: `import { Alert } from 'react-native'`,
            code: `Alert.alert('TEXTO', 'Subtexto...')`,
            run: () => Alert.alert('TEXTO', 'Subtexto...', [
                {
                    text: 'Dispensar',
                    onPress: () => {}
                },
                {
                    text: 'NÃO',
                    onPress: () => Alert.alert('Botão NÃO clicado!')
                },
                {
                    text: 'SIM', 
                    onPress: () => Alert.alert('Botão SIM clicado!')
                }
            ])
        }
    }

    function handlePress(mode) {
        setCode(examples[mode].code)
        setDependencies(examples[mode].dependencies)

        examples[mode].run()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ALERT</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => handlePress('basic')} style={styles.button}>
                    <Text style={styles.text}>BÁSICO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('withActions')} style={styles.button}>
                    <Text style={styles.text}>COM AÇÕES</Text>
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
