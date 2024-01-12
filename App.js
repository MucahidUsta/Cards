import { View } from 'react-native';
import { Header } from './components/header';
import Theme from './assets/theme';
import AboutSection from './sections/about';
import UserListSection from './sections/userList';

export default function App() {
  return (
    <View style={[Theme.centerContainer, Theme.pad1]}>
      <Header h1 >
        My Header Title is Children Data
      </Header>
      <UserListSection />
    </View>
  );
}
