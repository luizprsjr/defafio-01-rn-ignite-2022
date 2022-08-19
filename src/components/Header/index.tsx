import { Image, View } from 'react-native';

import Logo from '../../assets/Logo/Logo.png';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
      />

    </View>
  );
}
