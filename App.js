import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View
} from 'react-native'

import NotificationScreen from './src/pages/Notification'
import ToastScreen from './src/pages/Toast'
import SnackbarScreen from './src/pages/Snackbar'
// import DatePickerScreen from './src/pages/DatePicker'
// import DatePicker2Screen from './src/pages/DatePicker2'
import DatetimePickerScreen from './src/pages/DatetimePicker'

export default function App() {
  return (
    <>
        <SafeAreaView>
            {/* <View style={styles.container}>
                <NotificationScreen />
            </View> */}

            {/* <View style={styles.container}>
                <ToastScreen />
            </View> */}

            {/* <View style={styles.container}>
                <SnackbarScreen />
            </View> */}

            {/* <View style={styles.container}>
                <DatePickerScreen />
            </View> */}

            <View style={styles.container}>
                <DatetimePickerScreen />
            </View>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
    margin: 0,
    padding: 20
  }
})
