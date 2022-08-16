import React, { useState } from 'react'
import {Text,StyleSheet,View,TouchableOpacity,} from 'react-native'



const App = () => {

  const[randombg , setRandombg] = useState("rgb(35 ,90, 211");
  const[buttonbg , setButtonbg] = useState("rgb(35 ,90, 222");
  
const change = () => {
let color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256)  + ")"

setRandombg(color)

}
const buttonchange = () => {
  let buttoncolor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256)  + ")"

  setButtonbg(buttoncolor)
}

const reset  = () => {

  setRandombg("rgb(0,0,0)")   //when we click reset the setrandombg said to random bg change it to black
}

const combined = () => {
  change() ,
  buttonchange()
}


  return (
    <View style={[Styles.container , {backgroundColor : randombg}]}> 
        <TouchableOpacity onPress={combined} >
          <Text style={[Styles.textcolor , {backgroundColor : buttonbg}]}>GARVIT</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress ={reset}>
          <Text style ={[Styles.reset]}>RESET</Text>
        </TouchableOpacity>
    </View>
  );
};


export default App;


const Styles = StyleSheet.create ({
  container :{
    flex : 1,
    // backgroundColor : "black",
    alignItems : "center",
    padding : 20,
    
  },

  textcolor:{
    color : "black",
    backgroundColor : "yellow",
    fontSize : 50
    // paddingHorizontal : 20
  }
  ,

  reset : {
    backgroundColor : "purple",
    marginTop : 50,
    fontSize : 50
  },
})



// import {React , useState} from 'react'
// import {View , StyleSheet , Text , TouchableOpacity, Touchable} from 'react-native'


 

// const App = () => {

// // const [randombg , setRandombg] = useState[color = "yellow"]

//   return(
//     <View style = {[styles.container , {backgroundColor: "blue"}]}> 
//     {/* <TouchableOpacity> */}
//       <Text style = {[styles.textcolor]} > 
//         NARUTO
//       </Text>
//       {/* </TouchableOpacity> */}
//     </View>
//   );
// };




// export default App;

// const styles = StyleSheet.create({

// })