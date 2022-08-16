

import React , {useState} from 'react';
import {
  
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Button
 
} from 'react-native';

import {RNCamera} from 'react-native-camera'


const PrndingView = () =>{
  <View 
  style = {{flex : 1 , 
  justifyContent : "center", 
  alignItems : "center"}}>
<Text style = {{
  fontSize: 30, color : "red"
}} >
  Loading...
  </Text> 
  </View>
}

const App = () => {
  const [image , setImage] = useState(null)
  const takepicture  = async (camera) => {

  try {
    const options = {quality : 0.9 , base64 : false}
    const data = await camera.takepictureAsync(options)
    setImage(data.uri)
  } catch (error) {
    console.warn(error)
  }
  }
  return ( 
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
