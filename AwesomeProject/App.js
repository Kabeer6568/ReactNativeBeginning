/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Pressable,
  TouchableOpacity,
  Image,
  TextInput,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {
  const [text, onChangeText] = React.useState("Enter User Name");
  const [email, onChangeEmail] = React.useState("Enter Email");

  const hidden = styles.hidden;  
  const [login, useLogin] = useState(hidden);
  return (
    <>
      <View style={styles.container}>

        <View style={styles.imageAlignment}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png',
            }}
          />
        </View>
        <View style={styles.mainBtns}>
          <View>
            <TouchableOpacity style={[styles.loginBtns, styles.mainBtnsChild]} onPress={console.log(hidden)}>
              <Text>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={[styles.loginBtns, styles.mainBtnsRegister]}>
              <Text>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Login Foprm */}

        <View style={[styles.loginForm]}>
          <Text style={styles.mainHeading}>
            Login Here!
          </Text>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              keyboardType="email"
            />
          </SafeAreaView>
          <TouchableOpacity style={styles.button}>
            <Text>
              Submit
            </Text>
          </TouchableOpacity>
        </View>

        {/* Register Form */}

        <View style={[styles.registerForm,]}>
          <Text style={styles.mainHeading}>
            Register Here!
          </Text>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              keyboardType="email"
            />
          </SafeAreaView>
          <TouchableOpacity style={styles.button}>
            <Text>
              Submit
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </>

  )
}


const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 35,
    color: '#000',
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "sans-serif"
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    marginBottom: 60,
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
    borderStyle: "solid",
    borderRadius: 40,

  },
  registerForm: {
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    display: 'flex',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    width: 250,
    color: '#ABABAB',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#666',
    padding: 10,
    width: 250,
    display: 'flex',
    alignItems: "center",
    borderRadius: 5,

  },
  loginBtns: {
    marginTop: 10,
    backgroundColor: '#666',
    padding: 10,
    width: 150,
    alignItems: "center",
    borderRadius: 5,
  },
  mainBtns: {
    flex: 0,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: 'row'
  },
  mainBtnsChild: {
    width: 110,
     height: 50,
     justifyContent: 'center',
     marginRight: 10,
  },
  mainBtnsRegister: {
    width: 110,
    height: 50,
    justifyContent: 'center'
  },
  hidden:{
    display: 'none',
  },
  tinyLogo: {
    marginBottom: 20,
    width: 200,
    height: 80,
  },

})

export default App;
