//https://github.com/mmazzarolo/react-native-modal-datetime-picker/blob/next-major/README.md

import React, { useState } from "react"
import { TouchableOpacity, View, Text, Alert, StyleSheet } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"

export default function DatetimePickerScreen() {
    const [visible, setVisible] = useState(false)
    const [mode, setMode] = useState('date')
    const [code, setCode] = useState('')
    const [dependencies, setDependencies] = useState('')
    const data = {
        date: {
            dependencies: `import DateTimePickerModal from 'react-native-modal-datetime-picker'`,
            code: `<DateTimePickerModal
    isVisible={visible}
    mode='date'
    onConfirm={handleSetDatetime}
    onCancel={handleHideDatetimePicker}
    date={new Date(2020,0,1)}
    is24Hour={true}
/>`
        },

        time: {
            dependencies: `import DateTimePickerModal from 'react-native-modal-datetime-picker'`,
            code: `<DateTimePickerModal
    isVisible={visible}
    mode='time'
    onConfirm={handleSetDatetime}
    onCancel={handleHideDatetimePicker}
    date={new Date(2020,0,1)}
    is24Hour={true}
/>`
        },

        datetime: {
            dependencies: `import DateTimePickerModal from 'react-native-modal-datetime-picker'`,
            code: `<DateTimePickerModal
    isVisible={visible}
    mode='datetime'
    onConfirm={handleSetDatetime}
    onCancel={handleHideDatetimePicker}
    date={new Date(2020,0,1)}
    is24Hour={true}
/>`
        },
    }

    const handlePress = mode => {
        setMode(mode)
        setVisible(true)
        setDependencies(data[mode].dependencies)
        setCode(data[mode].code)
    }

    const handleHideDatetimePicker = () => {
        setVisible(false)
    }

    const handleSetDatetime = date => {
        Alert.alert(`Data selecionada: ${date}`)
        handleHideDatetimePicker()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DATETIME PICKER</Text>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('date')}>
                <Text style={styles.text}>DATE PICKER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('time')}>
                <Text style={styles.text}>TIME PICKER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('datetime')}>
                <Text style={styles.text}>DATETIME PICKER</Text>
            </TouchableOpacity>

            <View style={{...styles.codeContainer, display: code ? 'flex' : 'none'}}>
                <Text style={styles.codeImport}>{dependencies}</Text>
                <Text style={styles.code}>{code}</Text>
            </View>

            <DateTimePickerModal
                isVisible={visible}
                mode={mode}
                onConfirm={handleSetDatetime}
                onCancel={handleHideDatetimePicker}
                onHide={() => {}} //Função executada após a animação de cancelamento
                date={new Date(2020,0,1)}
                is24Hour={true}
                //minimumDate={new Date(2019, 10, 1)}
                //maximumDate={new Date(2019, 10, 5)}
            />
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
    buttonsContainer: {
        alignItems: 'center'
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
