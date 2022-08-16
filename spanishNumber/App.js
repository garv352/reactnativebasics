import React from 'react';
import { View , ScrollView , Image , StyleSheet , TouchableOpacity , Text} from 'react-native';
import Sound from 'react-native-sound';


const soundList =[
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
]




const App=()=>{
const play =(sound)=>{
  const soundv = new Sound(sound , Sound.MAIN_BUNDLE,(err)=>{
    if(err){
      console("FUCK")
    }
  });

  setTimeout(()=>{
    soundv.play()
  },1000);
  

 
  soundv.release();
}

  return(
    <ScrollView style = {styles.container}>
        <Image style = {styles.logo} source = {require('./assets/logo.png')}/>
      <View style={styles.grindcontainer}>
          {soundList.map((sound) => (
         <TouchableOpacity  key ={sound} style = {styles.box} onPress={() =>{play(sound)} }>
          <Text style={styles.text}>{sound}</Text>
         </TouchableOpacity>
          ))}
      </View>

    </ScrollView>
  );
};


export default App;

const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor:"black"
},

logo:{
alignSelf : "center",
marginTop : 15,
},

grindcontainer:{
flex : 1,
margin : 5,
flexDirection:"row",
flexWrap:"wrap",
alignItems:"flex-start",
justifyContent:"space-around",
},

box:{
  height : 110,
  alignItems:"center",
  justifyContent :"center",
  width : "46%",
  marginVertical : 5,
  backgroundColor : "white"
},

text:{
  fontSize : 50,
  color : "black"
},

})