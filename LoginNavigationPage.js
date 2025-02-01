import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native-web';

export default function LoginNavigationPage() {
  const navigation = useNavigation(); // Hook to navigate

  const navigateToLogin = () => {
    navigation.navigate('LoginPage'); // Navigate to the Login page
  };

  return (
    <View>
    <Button title="Go to Login" onPress={navigateToLogin} />
    </View>
  );
}
