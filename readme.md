# Components

Magic using webpack alias for fully themable react components.

## Usage

1. Install deps

  ```
  npm install
  ```

2. In a parent directory install https://github.com/DavidWells/component-themes and point `stylePath` in `.componentrc.json` to the correct folder.

  ```bash
  - /components
  - /component-themes
  ```

3. Rename `.componentrc.json.example` to `.componentrc.json` and point to your component theme directory


4. Run the playground

  ```bash
  # run
  npm start
  ```

5. Swap out path in `stylePath` in `.componentrc.json` and see the different themes apply.


# Goal
Create reusable components to be used by all my projects. No more recreating the wheel

# Features

* Themable
* Platform agnostic
* configurable
* Custom renderer
* Component hooks
* Event orchestration
* CSS global rules

# Rules
* Must follow jsStandard and Airbnb rules
* Components must be ES6
* styles must be localized
* All components must be composed of primatives

# Agnostic
Components are target agnostic. They can be rendered in:
- Dom
- native
- Canvas

This is done using webpack aliases and primitive components that map to correct targets.

Example: the <Div> component maps to <div> in Dom and to <view> in native

# themable

Custom styles can be overridden via componentrc config by providing path

*Todo*
- figure out how postCSS can map to inline
- remove classes creation from component creation
* .componentrc must be read from consumers project
* Component stamper + test stamper yeoman
* Theme stamper - generate empty style sheets automatically. Work on alias to ignore empties

Map postCSS to a RN stylesheet implementation with https://github.com/postcss/postcss-js

```js
import React, { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
};

```

*

Links
How react native shims to web: https://github.com/defunctzombie/package-browser-field-spec
- package.json in RN for aliases https://medium.com/@grabbou/a-cure-for-relative-requires-in-react-native-2b263cecf0f6#.2olqmg8qh
