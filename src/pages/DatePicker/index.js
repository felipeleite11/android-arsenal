//https://facebook.github.io/react-native/docs/datepickerandroid

import React, { useState } from 'react'
import { View, Text, TouchableOpacity, DatePickerAndroid, StyleSheet, Alert } from 'react-native'

export default function DatePickerScreen() {
    const [code, setCode] = useState('')
    const [dependencies, setDependencies] = useState('')
    const examples = {
        default: {
            dependencies: `import { DatePickerAndroid } from 'react-native'`,
            code: `const {action, year, month, day} = await DatePickerAndroid.open({
    date: new Date(),
    mode: 'default',
    //minDate: new Date(2020, 11, 31),
    //maxDate: new Date(2030, 11, 31)
})

if(action === DatePickerAndroid.dateSetAction) {
    // Tratar os valores year, month (0-11) e day
}
else { // Equivale a dismissedAction
    // O datepicker foi dispensado
}`,
            run: async () => {
                const {action, year, month, day} = await DatePickerAndroid.open({
                    date: new Date(),
                    mode: 'default'
                })

                if(action === DatePickerAndroid.dateSetAction) {
                    Alert.alert(`Data selecionada: ${day}/${month + 1}/${year}`)
                }
                else { // Equivale a dismissedAction
                    // O datepicker foi dispensado
                }
            }
        },

        calendar: {
            dependencies: `import { DatePickerAndroid } from 'react-native'`,
            code: `const {action, year, month, day} = await DatePickerAndroid.open({
    date: new Date(),
    mode: 'calendar',
    //minDate: new Date(2020, 11, 31),
    //maxDate: new Date(2030, 11, 31)
})

if(action === DatePickerAndroid.dateSetAction) {
    // Tratar os valores year, month (0-11) e day
}
else { // Equivale a dismissedAction
    // O datepicker foi dispensado
}`,
            run: async () => {
                const {action, year, month, day} = await DatePickerAndroid.open({
                    date: new Date(),
                    mode: 'calendar'
                })

                if(action === DatePickerAndroid.dateSetAction) {
                    Alert.alert(`Data selecionada: ${day}/${month + 1}/${year}`)
                }
                else { // Equivale a dismissedAction
                    // O datepicker foi dispensado
                }
            }
        },

        spinner: {
            dependencies: `import { DatePickerAndroid } from 'react-native'`,
            code: `const {action, year, month, day} = await DatePickerAndroid.open({
    date: new Date(),
    mode: 'spinner',
    //minDate: new Date(2020, 11, 31),
    //maxDate: new Date(2030, 11, 31)
})

if(action === DatePickerAndroid.dateSetAction) {
    // Tratar os valores year, month (0-11) e day
}
else { // Equivale a dismissedAction
    // O datepicker foi dispensado
}`,
            run: async () => {
                const {action, year, month, day} = await DatePickerAndroid.open({
                    date: new Date(),
                    mode: 'spinner'
                })

                if(action === DatePickerAndroid.dateSetAction) {
                    Alert.alert(`Data selecionada: ${day}/${month + 1}/${year}`)
                }
                else { // Equivale a dismissedAction
                    // O datepicker foi dispensado
                }
            }
        }
    }

    function handlePress(mode) {
        setDependencies(examples[mode].dependencies)
        setCode(examples[mode].code)

        examples[mode].run()
    }

    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.title}>DATEPICKER</Text>

                <TouchableOpacity onPress={() => handlePress('default')} style={styles.button}>
                    <Text style={styles.text}>DEFAULT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('calendar')} style={styles.button}>
                    <Text style={styles.text}>CALENDAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('spinner')} style={styles.button}>
                    <Text style={styles.text}>SPINNER</Text>
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
