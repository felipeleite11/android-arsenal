//Configuração para Android e IOS
//https://github.com/zo0r/react-native-push-notification/blob/a359e5c00954aa324136eaa9808333d6ca246171/README.md

//https://www.youtube.com/watch?v=TQmudJLhPx8
// Configuração no Android: 15:20

//https://www.npmjs.com/package/react-native-push-notification

import React, { useEffect, useState } from 'react'
import PushNotification from 'react-native-push-notification'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from 'react-native'

export default function NotificationScreen() {
    const [dependencies, setDependencies] = useState('')
    const [code, setCode] = useState('')
    const data = {
        default: {
            dependencies: `import PushNotification from 'react-native-push-notification'`,
            code: `PushNotification.localNotification({
    title: 'Notificação',
    message: 'Mensagem da notificação...',
    playSound: true,
    vibrate: true,
    vibration: 300
})`,
            run: () =>  PushNotification.localNotification({
                            title: 'Notificação',
                            message: 'Mensagem da notificação...',
                            playSound: true,
                            vibrate: true,
                            vibration: 300
                        })
        },

        schedule: {
            dependencies: `import PushNotification from 'react-native-push-notification'`,
            code: `PushNotification.localNotificationSchedule({
    title: 'Notificação programada',
    message: "Mensagem da notificação...",
    date: new Date(Date.now() + (3 * 1000)) //após 3 segundos
})`,
            run: () =>  PushNotification.localNotificationSchedule({
                            title: 'Notificação programada',
                            message: "Mensagem da notificação...",
                            date: new Date(Date.now() + (3 * 1000)) //após 3 segundos
                        })
        }
    }

    useEffect(() => {
        PushNotification.configure({})
        PushNotification.cancelAllLocalNotifications()
    }, [])

    function handlePress(mode) {
        setDependencies(data[mode].dependencies)
        setCode(data[mode].code)

        data[mode].run()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>NOTIFICAÇÕES</Text>

            <TouchableOpacity onPress={() => handlePress('default')} style={styles.button}>
                <Text style={styles.text}>NORMAL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('schedule')} style={styles.button}>
                <Text style={styles.text}>PROGRAMADA (3s)</Text>
            </TouchableOpacity>

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
      fontSize: 18,
      marginVertical: 15
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
    codeImport: {
        fontSize: 12,
        color: '#2C2C2C',
        fontWeight: 'bold',
        marginBottom: 15
    },
    code: {
        fontSize: 12,
        color: '#2C2C2C'
    }
})
