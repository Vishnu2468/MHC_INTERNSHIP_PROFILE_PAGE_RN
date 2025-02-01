import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeMessage from './WelcomeMessage';
import GreetingCards from './GreetingCards';
import { ScrollView } from 'react-native-web';
import ProfilePage from './ProfilePicPage';
import NameInputPage from './NameInputPage';
import Profile from './Profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.textfield}>Welcomw to MRU</Text>
      <StatusBar style="auto" />
      <WelcomeMessage/>
      <ScrollView >
      <GreetingCards message="Happy Birthday" emoj="❤"/>
      <GreetingCards message="Happy Birthday" emoj="❤"/>
      <GreetingCards message="Happy Birthday" emoj="❤"/>
      <GreetingCards message="Happy Birthday" emoj="❤"/>
      <GreetingCards message="Happy Birthday" emoj="❤"/>
      <GreetingCards message="Happy Birthday" emoj="❤"/>
      </ScrollView> */}
      {/* <ProfilePage name="Vishnu" discription="hello iam a student"/>
      <NameInputPage/> */}
      <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfield:{
    backgroundColor: "red",
    fontSize:50,
    
  }
});
