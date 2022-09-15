/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { ScrollView, Text, View, Image, TextInput } from 'react-native';

 import Cat from './components/Cat.js';
import CatApp from './components/CatApp.js';
 import ClassCat from './components/ClassCat.js';
import HungryCat from './components/HungryCat.js';
import TextInputName from './components/TextInputName.js';
 
 const YourApp = () => {
   return (
    <ScrollView>
        {/* <Cat name="Haruuu" />
        <Cat name="Hummus" />
        <ClassCat />
        <CatApp name="Pepe" /> */}

        <HungryCat name="Paranoid" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Try editing me!!2 🎉
        </Text>
      </View>
      <Text>Some Text</Text>
      <View>
        <Text>Text within a view</Text>
        <Image 
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
          }} 
          style={{
            width: 200,
            height: 200,
            borderColor: "#ff0000"
          }}
        />
        <TextInput
          style = {{
            height: 40,
            borderColor: "gray",
            borderWidth: 1
          }}
          defaultValue="Type here"
        />
        <TextInputName onChange = "onChangeText"/>
      </View>
    </ScrollView>
   );
 }
 
 export default YourApp;






/*
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes!">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
*/