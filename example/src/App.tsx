import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Select, SelectOption } from 'react-native-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function App() {
  const [value, setValue] = React.useState<Array<SelectOption>>([options[0]]);
  const [singleValue, setSingleValue] = React.useState<
    SelectOption | undefined
  >(options[0]);

  return (
    <View style={styles.container}>
      <Select
        multiple
        options={options}
        value={value}
        onChange={(option) => setValue(option)}
        color="red"
        placeholder="Select your favorite flavor"
      />
      <View style={styles.gap} />
      <Select
        options={options}
        value={singleValue}
        onChange={(option) => setSingleValue(option)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  gap: {
    margin: 10,
  },
});
