# React Native Select

[![npm version](https://badge.fury.io/js/react-native-multi-options.svg)](https://badge.fury.io/js/react-native-multi-options)

A simple select component for React Native.

![react-native-multi-options](https://user-images.githubusercontent.com/10114716/193332497-5d4fc808-f5ac-475e-b7c7-f0c742673296.png)

## TODO

- [x] Add support for single selection
- [x] Add support for multiple selections
- [x] Add support for disabled options
- [x] Add support for disabled select
- [x] Add support for placeholder
- [ ] Add search functionality
- [ ] Add support for placeholder color
- [ ] Add tests
- [ ] Add support for custom components
- [ ] Add support for custom styles
- [ ] Add support for custom placeholder
- [ ] Add support for validation
- [ ] GitHub Actions for CI/CD

## Installation (Not available yet)

```bash
npm install react-native-multi-options
```

## Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import Select from 'react-native-multi-options';

const options = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' },
];

const App = () => {
  const [value, setValue] = React.useState('one');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Select
        multiple
        options={options}
        value={value}
        onChange={(option) => setValue(option)}
        disabledOptions={[options[1]]}
      />
    </View>
  );
};
```

## Props

| Prop                     | Type     | Default   | Description                                                 |
| ------------------------ | -------- | --------- | ----------------------------------------------------------- |
| options                  | Array    | []        | Options to be displayed in the select                       |
| value                    | String   |           | Value of the selected option                                |
| onChange                 | Function |           | Callback function to be called when an option is selected   |
| multiple                 | Boolean  | false     | Whether the select should allow multiple selections         |
| disabled                 | Boolean  | false     | Whether the select should be disabled                       |
| placeholder              | String   | Select... | Placeholder text to be displayed when no option is selected |
| placeholderTextColor     | String   | #999      | Placeholder text color                                      |
| style                    | Object   |           | Style object to be applied to the select                    |
| optionStyle              | Object   |           | Style object to be applied to the options                   |
| optionTextStyle          | Object   |           | Style object to be applied to the option text               |
| optionContainerStyle     | Object   |           | Style object to be applied to the option container          |
| optionContainerTextStyle | Object   |           | Style object to be applied to the option container text     |
| optionSelectedStyle      | Object   |           | Style object to be applied to the selected option           |
| optionSelectedTextStyle  | Object   |           | Style object to be applied to the selected option text      |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
