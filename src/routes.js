import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ListScreen from './List'
import DatetimePickerScreen from './pages/DatetimePicker'
import NotificationScreen from './pages/Notification'
import SnackbarScreen from './pages/Snackbar'
import ToastScreen from './pages/Toast'
import VibrationScreen from './pages/Vibration'
import AlertScreen from './pages/Alert'
import AsyncStorageScreen from './pages/AsyncStorage'
import AnimationScreen from './pages/Animation'
// import TTSScreen from './pages/TTS'

const Routes = createAppContainer(
    createStackNavigator({
        List: { screen: ListScreen },
        DatetimePicker: { screen: DatetimePickerScreen },
        Notification: { screen: NotificationScreen },
        Snackbar: { screen: SnackbarScreen },
        Toast: { screen: ToastScreen },
        Vibration: { screen: VibrationScreen },
        Alert: { screen: AlertScreen },
        AsyncStorage: { screen: AsyncStorageScreen },
        Animation: { screen: AnimationScreen },
        // TTS: { screen: TTSScreen }
    },
    {
        initialRouteName: 'List',
        headerLayoutPreset: 'center',
        header: {
            style: {
                textAlign: 'center'
            }
        },
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'gold'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#2C2C2C', //Back arrow color
            headerTitle: 'ARSENAL'
        }
    })
)

export default Routes
