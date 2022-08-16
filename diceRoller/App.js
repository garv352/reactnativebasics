import React, { useState } from 'react'
import { View , Text , TouchableOpacity ,StyleSheet ,Image} from 'react-native'

 import Diceone from './assets/dice1.png'
 import Dicetwo from './assets/dice2.png'
 import Dicethree from './assets/dice3.png'
 import Dicefour from './assets/dice4.png'
 import Dicefive from './assets/dice5.png'
 import Dicesix from './assets/dice6.png'

const App = () => {

  const diceNumber = [{Diceone ,Dicetwo ,Dicethree ,Dicefour ,Dicefive ,Dicesix }]

const [diceimage , setDiceimage] = useState(Diceone);
const [diceimages , setDiceimages] = useState(Diceone)


const random = () => {
    let diceNo =  Math.floor(Math.random() * 6 ) + 1;
    let diceno =  Math.floor(Math.random() * 6 ) + 1;
    
   switch (diceNo) {
     case 1:
       setDiceimage(Diceone)
       break;
     case 2:
       setDiceimage(Dicetwo)
       break;
     case 3:
       setDiceimage(Dicethree)
       break;
     case 4:
       setDiceimage(Dicefour)
       break;
     case 5:
       setDiceimage(Dicefive)
       break;
     case 6:
       setDiceimage(Dicesix)
       break;
       
   }
   switch (diceno) {
     case 1:
       setDiceimages(Diceone)
       break;
     case 2:
       setDiceimages(Dicetwo)
       break;
     case 3:
       setDiceimages(Dicethree)
       break;
     case 4:
       setDiceimages(Dicefour)
       break;
     case 5:
       setDiceimages(Dicefive)
       break;
     case 6:
       setDiceimages(Dicesix)
       break;
       
   }
}


  return(
    <View style = {Styles.container}>
      <Image source = {diceimage} style = {{height : 100  , width : 100}}/>
      <Image source = {diceimages} style = {{height : 100  , width : 100}}/>
      <TouchableOpacity onPress = {random}>
        <Text style = {Styles.text}>ROLL IT</Text>
      </TouchableOpacity>
    </View>
  )
}




export default App;

const Styles = StyleSheet.create({
  container : {   
    flex : 1, 
    // color : "white"
    alignItems : "center",
    justifyContent : "center"
},

text : {
  // flex : 1,
  marginTop : 100,
 fontSize : 30,
 borderRadius : 7,
 borderColor : "black",
 borderWidth : 2,
 padding : 5,
}
})