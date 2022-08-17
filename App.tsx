import { StatusBar } from 'react-native';

import { Main } from './src/screens/Main';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0D0D0D"
        translucent
      />
      <Main />
    </>
  );
}
