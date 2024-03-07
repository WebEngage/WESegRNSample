import React, {Component} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import {createClient} from '@segment/analytics-react-native';

import {WebEngagePlugin} from 'react-native-segment-plugin-webengage';
// @ts-ignore
import WebEngage from 'react-native-webengage';

interface AppState {}

class App extends Component<{}, AppState> {
  webengage = new WebEngage();

  constructor(props: {}) {
    super(props);
    this.setupSegment();
  }
  //wJpxnEoB60ywZXw0fhyBWHnyfZgiBS1p
  setupSegment() {
    this.webengage.notification.onShown(function (notificationData) {
      console.log('NOTIFICATION SHOWN ' + notificationData);
    });

    this.webengage.notification.onClick(function (notificationData, clickId) {
      console.log('NOTIFICATION CLICK ' + JSON.stringify(notificationData));
    });

    const segmentClient = createClient({
      writeKey: 'gaZvQjMOjy274ROC3S5UfleBR8VvRyM8',
      debug: true,
      trackAppLifecycleEvents: true,
    });

    segmentClient.add({plugin: new WebEngagePlugin()});
    segmentClient.track('dummy', {a: 'b'});
    // segmentClient.screen('screen1', {});
    segmentClient.identify('1234', {
      firstName: 'Milind',
      address: {city: 'Mumbai', country: 'India'},
      birthday: '10 May',
      name: 'Milind',
      gender: 'Male',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Image
            style={styles.banner}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/008/629/549/non_2x/abstract-banner-template-with-dummy-text-for-web-design-landing-page-background-etc-free-vector.jpg',
            }}
          />
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
};

export default App;
