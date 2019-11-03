import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ListScreen from './List'
import DatetimePickerScreen from './pages/DatetimePicker'
import NotificationScreen from './pages/Notification'
import SnackbarScreen from './pages/Snackbar'
import ToastScreen from './pages/Toast'

const Routes = createAppContainer(
    createStackNavigator({
        List: { screen: ListScreen },
        DatetimePicker: { screen: DatetimePickerScreen },
        Notification: { screen: NotificationScreen },
        Snackbar: { screen: SnackbarScreen },
        Toast: { screen: ToastScreen }
    },
    {
        initialRouteName: 'List'
    })
)

export default Routes
