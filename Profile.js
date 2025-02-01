import { ScrollView, View, StyleSheet } from "react-native-web";
import InputFields from "./InputFields";
import ProfilePage from "./ProfilePicPage";
import DateOfBirth from "./DateOfBirth";
import Update from "./Update";
import Cancel from "./Cancel";
import LoginPage from "./LoginPage";
import LoginNavigatePage from "./LoginNavigationPage";
import LoginNavigationPage from "./LoginNavigationPage";

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfilePage />
        <InputFields />
        {/* <DateOfBirth/> */}
      </ScrollView>
      <View style={styles.buttonRow}>
        <Update />
        <Cancel />
      </View>
      {/* <LoginNavigationPage/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e3f2fd",
  },
});
