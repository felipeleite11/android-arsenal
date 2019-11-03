//https://github.com/mmazzarolo/react-native-modal-datetime-picker/blob/next-major/README.md

import React, { useState } from "react"
import { TouchableOpacity, View, Text, Alert, StyleSheet } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"

export default function DatetimePickerScreen() {
    const [visible, setVisible] = useState(false)
    const [mode, setMode] = useState('date')

    const showDatePicker = mode => {
        setMode(mode)
        setVisible(true)
    }

    const hideDatePicker = () => {
        setVisible(false)
    }

    const handleSetDatetime = date => {
        Alert.alert(`Data selecionada: ${date}`)
        hideDatePicker()
    }

    return (
        <View style={styles.buttonsContainer}>
            <Text style={styles.title}>TOAST</Text>

            <TouchableOpacity style={styles.button} onPress={() => showDatePicker('date')}>
                <Text style={styles.text}>DATE PICKER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => showDatePicker('time')}>
                <Text style={styles.text}>TIME PICKER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => showDatePicker('datetime')}>
                <Text style={styles.text}>DATETIME PICKER</Text>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={visible}
                mode={mode}
                onConfirm={handleSetDatetime}
                onCancel={hideDatePicker}
                onHide={() => {}} //Função executada após a animação de cancelamento
                date={new Date(2020,0,1)}
                isDarkModeEnabled={false}
                is24Hour={true}
                //minimumDate={new Date(2019, 10, 1)}
                //maximumDate={new Date(2019, 10, 5)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})
