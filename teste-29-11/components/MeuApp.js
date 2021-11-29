import React from 'react';
import {Button, View, Text} from 'react-native';

export default class MeuApp extends React.Component {
  static navigationOption = {
    title: "MeuApp"
  }

  render(){
    return (
      <View>
       <Text> Hello Word! </Text>
       <Button color ="#0CF7E6" title="Next"
       onPress={() => this.props.navigation.navigate("Msg")}/>
       </View> 
    )
  }
}