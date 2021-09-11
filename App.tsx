import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";

const App = () => {
  const [message, setMessage] = useState("");
  const sendMessageToAppleWatch = () => {
    Alert.alert(`the message "${message}" has been sent`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="message"
      />
      <Button onPress={sendMessageToAppleWatch} title="SEND" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
