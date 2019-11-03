//https://github.com/react-native-community/react-native-datetimepicker#getting-started

import React, { useState } from 'react'
import { View, Text, TouchableOpacity, DatePickerAndroid, StyleSheet, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DatePicker2Screen() {
    const [installation, setInstallation] = useState('')
    const [code, setCode] = useState('')
    const [dependencies, setDependencies] = useState('')
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState('calendar')

    const examples = {
        calendar: {
            installation: 'yarn add @react-native-community/datetimepicker',
            dependencies: `import DateTimePicker from '@react-native-community/datetimepicker'`,
            code: `<DateTimePicker
    mode="date"
    is24Hour={true}
    value={new Date()} //Default date
    //maximumDate={new Date()}
    //minimumDate={new Date()}
    //minuteInterval={1} //Intervalos entre os minutos selecionados: aceita 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30
    display="calendar" //clock, spinner ou default
    onChange={handleSetDate} />`
        },

        clock: {
            installation: 'yarn add @react-native-community/datetimepicker',
            dependencies: `import DateTimePicker from '@react-native-community/datetimepicker'`,
            code: `<DateTimePicker
    mode="clock"
    is24Hour={true}
    value={new Date()} //Default date
    //maximumDate={new Date()}
    //minimumDate={new Date()}
    //minuteInterval={1} //Intervalos entre os minutos selecionados: aceita 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30
    display="calendar" //clock, spinner ou default
    onChange={handleSetDate} />`
        },

        spinner: {
            installation: 'yarn add @react-native-community/datetimepicker',
            dependencies: `import DateTimePicker from '@react-native-community/datetimepicker'`,
            code: `<DateTimePicker
    mode="spinner"
    is24Hour={true}
    value={new Date()} //Default date
    //maximumDate={new Date()}
    //minimumDate={new Date()}
    //minuteInterval={1} //Intervalos entre os minutos selecionados: aceita 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30
    display="calendar" //clock, spinner ou default
    onChange={handleSetDate} />`
        }
    }

    function handlePress(mode) {
        setInstallation(examples[mode].installation)
        setDependencies(examples[mode].dependencies)
        setCode(examples[mode].code)

        setMode(mode)
        setShow(true)
    }

    function handleSetDate(event, date) {
        setShow(false)

        if(date) {
            Alert.alert(`Data selecionada: ${date.getDay()}/${date.getMonth() + 1}/${date.getYear()}`)
        }
    }

    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.title}>DATEPICKER 2</Text>

                <TouchableOpacity onPress={() => handlePress('calendar')} style={styles.button}>
                    <Text style={styles.text}>CALENDAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('clock')} style={styles.button}>
                    <Text style={styles.text}>CLOCK</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('spinner')} style={styles.button}>
                    <Text style={styles.text}>SPINNER</Text>
                </TouchableOpacity>
            </View>

            <View>
                {show && <DateTimePicker
                    mode={mode}
                    is24Hour={true}
                    value={new Date()} //Default date
                    //maximumDate={new Date()}
                    //minimumDate={new Date()}
                    //minuteInterval={1} //Intervalos entre os minutos selecionados: aceita 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30
                    display="default" //clock, spinner ou default
                    onChange={handleSetDate} />}
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
        fontSize: 12,
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
