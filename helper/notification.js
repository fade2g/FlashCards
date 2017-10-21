import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo';

const NOTIFICATION_KEY = 'FlashCards:LocalNotifications';
const NOTIFICATION_STOP_KEY = 'FlashCards:LocalNotificationsOff';
const NOTIFICATIONS_OFF = 'NOTIFICATIONS_OFF';
const NOTIFICATIONS_ON = 'NOTIFICATIONS_ON';

export function clearLocationNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(() => {
      Notifications.cancelAllScheduledNotificationsAsync()
    })
}

export function createNotification() {
  return {
    title: 'Learn something today',
    body: 'Don\'t forget to start a quiz today',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  getLocalNotificationMode()
    .then((data) => {
      console.log('data' + data);
      if (data) {
        AsyncStorage.getItem(NOTIFICATION_KEY)
          .then(JSON.parse)
          .then((data) => {
            if (data === null) {
              Permissions.askAsync(Permissions.NOTIFICATIONS)
                .then(({status}) => {
                  if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync();

                    let tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    tomorrow.setHours(20);
                    tomorrow.setMinutes(0);
                    tomorrow.setSeconds(0);

                    Notifications.scheduleLocalNotificationAsync(
                      createNotification(),
                      {
                        time: tomorrow,
                        repeat: 'minute',

                      }
                    );
                    setLocalNotification(true);
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                  }
                })
            }
          })
      }
    })

}

export function setLocalNotificationMode(on) {
  AsyncStorage.setItem(NOTIFICATION_STOP_KEY, JSON.stringify({status: on ? NOTIFICATIONS_ON : NOTIFICATIONS_OFF}));
}

export function getLocalNotificationMode() {
  return AsyncStorage.getItem(NOTIFICATION_STOP_KEY)
    .then(JSON.parse)
    .then((data) => data.status !== NOTIFICATIONS_OFF);
}
