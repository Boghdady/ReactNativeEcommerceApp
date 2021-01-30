import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppButton } from './src/components/AppButton';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <AppButton
        title="DONE"
        isLoading={false}
        onPress={() => {
          alert('hi');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
