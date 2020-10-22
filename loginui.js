import React from 'react';
import { StyleSheet, Text, View,TextInput,Button, Linking,TouchableHighlight,Image, YellowBox} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient'
export default class App extends React.Component {

  state={

    email:'',

    password:'',

    username:''
  }
  /*handleEmail=(text)=>{
  this.setState({email:text})
  }*/
  
  /*handleusername=(text)=>{
  this.setState({username:text})
  }*/
  
  /*handlepassword=(text)=>{
  this.setState({password:text})
  }*/
  
 login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
    }
 
   render() {
      return (

         <View style={styles.container}>
            <View style={styles.header}>
               <Text style={{color:'#fff',fontWeight:'bold',fontSize:30}}>Login</Text>
               
            </View>
   
         <View style={styles.footer}>
               
                
            <TextInput style={styles.input}

              underlineColorAndroid='transparent'
              placeholder='Enter Email address here...'
              placeholderTextcolor='#9a73ef'
              autoCapitalize='none'
             /*onChangeText={this.handleEmail}*/
            /> 



  
             <TextInput style={styles.input}

                underlineColorAndroid='transparent'
                 placeholder='Enter username here...'
                 placeholderTextcolor='#9a73ef'
                 autoCapitalize='none'
                 /* onChangeText={this.handleusername}*/
                  />




            <TextInput style={styles.input}

             underlineColorAndroid='transparent'
             placeholder='Enter password here...'
             placeholderTextcolor='#9a73ef'
             autoCapitalize='none'
                /* onChangeText={this.handleusername}*/
               />

               <View style={{width:'90%'}}>
<Text style={[styles.textbody],{alignSelf:'flex-end'}}onPress={()=>Linking.openURL('sign up')}>
Forgot Password?

</Text>

               </View>

<Button title='login' color='yellow' borderRadius='25'/>

<View style={{flexDirection: 'row', alignItems: 'center',}}>

                
  <View style={{flex: 1, height:2, backgroundColor: 'black'}} />
  <View>
  <Text style={styles.continue}>continue with your social account</Text>
  </View>
  <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
</View>

<View style={{flexDirection: 'row', alignItems: 'center',justifyContent: "center"
          }}>
<View style={{width: 60, height: 60, backgroundColor: 'white',justifyContent: "center",
          alignItems: "center"}}>
        <TouchableHighlight 
  onPress={() => Linking.openURL('https://facebook.com')}>
  <Image 
    source={{uri:'https://oceanofapk.com/wp-content/uploads/2017/07/Facebook-APK-Free-Download.png'}} 
    style={{height:50, width:50}} />
</TouchableHighlight>
</View>

<View style={{width: 60, height: 60, backgroundColor: 'white',alignItems:'center'}}>
        <Text></Text>
</View>

<View style={{width: 60, height: 60, backgroundColor: 'white'}}>
        <TouchableHighlight 
  onPress={() => Linking.openURL('https://facebook.com')}>
  <Image 
    source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEX////oQjQzqFJChPP5uwigvfo4f/I2fvOwx/k/gvNVkfj5uQD5uADoQDL/vAAeo0XnMiDnOSnoLxwqpkz3x8X98O+FqvbW69pDgvnH4sz73dvnNiXwg3z+/fn7vxsmpUnx+PIyqkJ7wor3vbn1q6bnNzb6wAD97MqStPcZp1X1+f6938P50s/74+HsUUX1qKPzn5rrWy30mBj70XD9+Ov74Kn98dr5xkz6037o7/386cH70XGVsDeqxPiu2LaVzaBMsWQ7lbLZ5PzwdGzvYVf0lo/3wL3ucmnzgHjtTUDwZ13sWU/0m1f2oxHveCT3rA/qTzDtainyiR/vXEP82IsiePb7xTrC1ftmm/nkuApps1nAtCZnrEXYtxqssy5un/d8rj5tvX7CwFscnWQ+h+E9kcM6mKE3oXc+jdE3nYpdt3Fyv4IvpF5EX9uUAAAJQklEQVR4nO2ca3fbxhFASYgmTVEgXlIYkbQBk6qUmKTExnbipDXJmqJtSU2fdm03aRP1kTZU///nAnxAAAgQu7MvQGfvp8QnB8LNzM7szkIuFCQSiUQikUgkEolEIpFIJBKJJHMMmv39Ff3+4ED061BksH/Unp4apmnqPu6/mMXzN7NuP+emze7sUjX1lmGoajGKqhpGyxWdDvcHol8UxOBoaph6nFpE1GjpZrH9KmfB7M+KZstIkwtq6ubVWW5C2Z8ZJoadb9kyT89yEMnBEKTnS553RRtsp/8arreS1I1hdgPZPTUNIr2lo2G+yeSKfHB2oZOF7xbDnPZF+2xwpLZo+a0csxXHLr34+Y56OzvrsXlJ3a/orUfjSLTZkoO2ycBv4ahfNUXbuXRVCvUz2XEm2u9gyiqAK8XWqdgwMg3gylEfChRktgLDipeiiurgtMXez8MwxPT/LuEOFAPVFNE3Zjwy9FaxzV1wqvPz82i9fsDV7+CK0xK8xbjiWW8GReZNIkbR4KfY5FdjbuFZbZpUz0kZFOyzOEikwlFwwLNLCBEUkaI8BQ+Kd13w4o4LFi4F9EGugm3uOxnOgmfmHRfsEwqq3o2hh/sPyMuZpyBBGVXVlm7qxsXlm7bH66uiYXq3b6kP5HswhFYZtWUar4evmuF986DfnZ17N6jZERyCDoTefdkwcVp2sD+72HJZxVewD9isqYZ5dZR25GnO1ISNLufZxSm2oNoy2mizzu5l3K0cZ8EZbidUWyrGTWdzc7DMWbCJm6OGMcSbq/TPw7nKe7x2jieomoCbsdD8nLfgEV4dBV4ZBS6xeAseYM1lVBN80fDKMIQIFmY4vd4oElwWLaeU3AUHOIMZfUo282vrAmb4U/QQEmTomqHJXbCPXmZUk8IXTWdn5M/A47fIIVT1fd4vR4OT429RBQVd85HypHa898tfIEUwn4Jf1kql0vHv0hVVM5cpWig89wxLx1+kfupLo8iI4MFC0FX8/R+2h1HoFxMkPNsrrfnjNkVjKvpNoTys+YbHf0pWVE/53kHT4+Q2hK7it0mLUdWz8P0ZiCe1UlAxqW3o3Lch1CiFDJPahnol+j3BfLNXinD8xaZijnM0kqRJbaMl/AtJOJuCMW1DLea1jkYqaSCM4bahZ+RbZQjP42MYbhs5LjOhdh9RDLQNPaf7UY+n8Um6dFy3DfVC9GsS8GyLod82WjlehYVfJSXpUnHRNlSOn9PRJ3EZrnHbhsH/y1Z6PE0T9NqGmc/JxZKTVEO3bfxZ9FuSsLXQrHmL/dgX92jzGdQwZlO6Qe0E+7G7lTJl3n0NNPxLumGthL8l3a3uUKbyHmiIEsIn+I+lb1i+BxPctqPxDZ9lwvATmGHCwSLE3pdZMKx+gBkilVLAyZC+4c4OzPBtumHtK8BzGRi+gxkmHQ6Dhs+zYViBtQuEdrgHKDRMDF+CDL9CMPwmI4awhph6soCV0gwZpvq5hk8zYvgCZIjS8CFjRAaGwE0No3bIxBB2ukBohw+lIS9D2MY0R4bVO2/ILIbZqTTMDDPTLWCGCCHMSscHGiKMabKyawN2ixztvIGGOTo9AXdteToBw3beOZpiVO6DDFEmUZB2kZ3zYX6midApRn4mwtBJVH6m+jvvHsMMc3MzU63CBFOu8VeKgNu1zEz1kYrpHv4N6W4FizKCIfBmBuWWu/7xr9iPvY/HvXRF6O0awpcK9e8UrQF8OirvK6mG4BvStJlwrf7rzxWrQ1MnBoQYAtthIa3U1B9+/7miKLZDUSeGD+mFqQJsFimlpv43xRNUtBFNnw0elxFKL/jp23Y19b8v/DyYfj+LsAyrP8Afn7gQa7UffUGtR89nk08YllKXtwmG9Y+KL6hYE2o6MaSnKEGhSTxe1L+79WO8EhGSlKDQFOI334smEYbdSvwhvc5Ud0l+QMyspl76Pipoj2kJRfkaIYTAMdSKzd8ocZvEJsw2Ngh1hmgZFjZ/KyjQJAKwKjYoIdypkP2McJrW6j/GCTIrNighJOmGHqFqGmoSHPL0JVIIYXO2WwJN3z1JJGJNGNRThC0pfEbj4+9NY5pEqJ5eU5EK8gIlhODzvc/6N51XJ4lkNNot42UFJYRl2Lg7yHK4vz5JbFOkvD9Fm+cQJ+nqbxyIbxJRxUMKXj4odZRGkha8hlErJTQJhor3UBYhyQAjwEn9Y8oS9LGo9Yz7aILgSWmYf1hofhSjeB+pypAdDQM0NGRDSpsbVEEadWbBDXoQqTSNF6iC4FFwFJwgKtq1Q/jjPkNbgzvEx4oAYxtD0VKI6s3jD8iCVFrFEgcjTQkz9T3K9HAdQhqtYsUIJ09dxQkwjE7nn//6VEAIXeZ4UbS0jgP4KSPbsux/oyrSW4UeWMVm4WiPcc9Tvcnihzz6qYqUqKRH3yhYxWaBrYwdfD9P8T87KGd7Wr3QZ4KXpwtHq4O4Hp3xJJAktvLf9EwlG7HFgZ2nHpY2GTmpeqO5FsmQR79JVySZA8czhii6AdHm40biknQOx3NN20yPRz/vbF+MNDuFzzV+ni6wbM26HvcaTtitcTjquHZ2/FPt7W2jTLnMrN4JJri2dF0m85uOx/V8svyDLf/PtreNKu0ys+QQlqfB116D8h8/+unTpEwlHiEmgbm1ISWxbbDJ0QUdvoqWFds2qgzqqA/m7o2YuLZRpbtdi+AovBV/3tjDMVuEghTt/0XaRoXWwT5REXuDSkikbZSpnpliAW3fiAi2jeouwyojUNFvG1VGrT6qyDtR3bW/ahtlLoKuIu9ys24bZZZ9IgT3irpsG0wbYVRxwj1T3bbBUdDlhne9IZzDAgCeiKHYE4ezYKHQQzsE0UG7EfGXpHJcjNS/EkCF02nKsqleoGPR49E2tLkjTNDNVOY11RKWoWt6CtPVaENveSjidGIGnpQQH8AljTmjVNWuxQdwRW/CwFGbiCuhMYxoL0dbYfu7Kvg8GNGMo6aMsvg3vbu5SqXmeFdWol2SOLyJXpThY2vXmVp/UZyxQiJpaXhXx2JoQCVtVy8z7SGFhSTWmrS0HOktcUY3VuIFaFjOdu06PUf0G0No9MZzK/kq1PLctMnN6NAR/aZEOIej8c3EFY1gTa47G5ffucZpNA5XNBoNJ4sNXSKRSCQSiUQikUgkEolEIpFI7i7/BxhoVwYhp7ttAAAAAElFTkSuQmCC'}} 
    style={{height:50, width:50}} />
</TouchableHighlight>
</View>

</View>

<View style={{flexDirection:'row',marginVertical:5}}>
<Text style={styles.tex}>
Don't have an account?

</Text>

<View></View>

<Text style={{color:'blue',textAlign:'right'}}

onPress={()=>Linking.openURL('sign up')}>create an account from here</Text>

</View>


               
            </View>
   
         </View>
        

      
       
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
            backgroundColor: '#fbea22'
   },

   login:{
    fontWeight:'bold',
    fontSize:40

  },

  input: {
   margin: 15,
   height: 50,
   borderColor: 'yellow',
   borderWidth: 2,
   width:'100%',
   backgroundColor:'white',
   borderRadius:25,
   fontSize:20,
   fontWeight:'bold'
   //marginTop:40,
   //marginBottom:10

  },
  text:{
     //textAlign:'right',
     fontWeight:'bold',
     fontSize:20
  },

  continue:{
        color:'black',
        fontSize:15
  },
use:{
   color:'blue',
   fontSize:30
},

header:{
   flex:1,
   justifyContent:'flex-end',
   paddingHorizontal:20,
   paddingBottom:50


 },
 footer:{
   flex:3,
   backgroundColor:'#fff',
   borderTopLeftRadius:30,
   borderTopRightRadius:30,
   paddingHorizontal:30,
   paddingVertical:30


 },

 text:{
color:'#05375a',

fontSize:18

 },



 textsign:{

fontSize:18,
fontWeight:'bold'




 },

 button:{
alignItems:'center',
marginTop:50

 },

 textbody:{
fontFamily:'Foundation',
fontSize:16},


tex:{
   fontSize:18,
   //fontWeight:'bold',
   color:'black'
}

 



});