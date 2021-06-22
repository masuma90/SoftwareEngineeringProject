import React, { Componet } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Health and Fitness App </Text>
        <Text style={{fontWeight: "bold"}}> </Text>
        <Text style={styles.setColor}> Login Account </Text>
        <TextInput 
        style={styles.input}
        placeholder="Email"
        />
          <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        />
           

      <View style={styles.ButtonContainer}>
<TouchableOpacity style={styles.userButton}>
<Text style={styles.ButtonText}>Login</Text>
</TouchableOpacity>
      </View>
 <Text style={styles.setColor}> Or </Text>
        <View style={styles.ButtonContainer}>
<TouchableOpacity style={styles.userButton}>
<Text style={styles.ButtonText2}>Create an Account ! </Text>
</TouchableOpacity>


      </View>

      <View style={styles.ButtonContainer}>
<TouchableOpacity style={styles.userButton}>
<Text style={styles.ButtonText1}>Forgot Password?</Text>
</TouchableOpacity>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems : 'center',
 
},

welcome : {
fontSize: 25,
textAlign: 'center',
margin: 10,
color: "#c71585",
fontFamily: 'DancingScript-Bold',

},
  setColor : {
fontSize: 20,
textAlign: 'center',
margin: 5,
color: "##2f4f4f",
fontFamily: 'DancingScript-Bold',
},      


input : {
width: "90%",
backgroundColor: "#ffe4b5",
padding: 20,
marginBottom: 10,

},

userButton : {  
backgroundColor: "#fff",
padding: 15,

},

ButtonText : {
  width:130,
  fontSize: 15,
  textAlign: 'center',
  padding: 10,
  color: '#f5fffa',
   borderRadius: 50,
   backgroundColor: "green"
   
  

},
ButtonText1 : {
  fontSize: 15, 
  textAlign: 'left',
  padding: 1,
  height: 10,
  color: '#20b2aa',
  
},
ButtonText2 : {
  fontSize: 15,
  textAlign: 'left',
  padding: 1,
  height: 10,
  color: '#000080',
  
},
})
