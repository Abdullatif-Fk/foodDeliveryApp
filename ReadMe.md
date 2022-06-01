npm install @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack @react-navigation/drawer --legacy-peer-deps

## To change the device :

### adb -s <device name> reverse tcp:8081 tcp:8081

adb -s 2JNDU19121016115 reverse tcp:8081 tcp:8081
adb -s emulator-5554 reverse tcp:8081 tcp:8081

# 1-Disconnect the USB connection—or turn off the device's Wi-Fi if you're connected over Wi-Fi.

# 2-Close Android Studio/Eclipse/other IDE.

# 3-Run adb kill-server to ensure adb is not running.

# 4-Restart your Android device.

# 5-After your device restarts, connect it via USB and run adb devices. This should start the ADB daemon. Your device should now be online again.
