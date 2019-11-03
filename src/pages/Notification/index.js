//Configuração para Android e IOS
//https://github.com/zo0r/react-native-push-notification/blob/a359e5c00954aa324136eaa9808333d6ca246171/README.md

//https://www.youtube.com/watch?v=TQmudJLhPx8
// Configuração no Android: 15:20

//https://www.npmjs.com/package/react-native-push-notification

import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import {
    StyleSheet,
    Text,
    TouchableOpacity
  } from 'react-native';

export default function NotificationScreen() {
    useEffect(() => {
        PushNotification.configure({})
    
        PushNotification.cancelAllLocalNotifications()
    }, [])

    function handleNormalNotification() {
        PushNotification.localNotification({
            title: 'Notificação',
            message: 'Mensagem da notificação...',
            playSound: true,
            vibrate: true,
            vibration: 300
        })
    }

    function handleScheduleNotification() {
        PushNotification.localNotificationSchedule({
            title: 'Notificação programada',
            message: "Mensagem da notificação...", 
            date: new Date(Date.now() + (3 * 1000)) //após 3 segundos
        })
    }

    return (
        <>
            <Text style={styles.title}>NOTIFICAÇÕES</Text>

            <TouchableOpacity onPress={handleNormalNotification} style={styles.button}>
                <Text style={styles.text}>NORMAL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleScheduleNotification} style={styles.button}>
                <Text style={styles.text}>PROGRAMADA (3s)</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
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
    }
})