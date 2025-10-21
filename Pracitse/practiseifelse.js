import React, { useState } from "react";
import { View, Text,  } from "react-native";

export default function Example() {
  const [isOn, setIsOn] = useState(true);

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:50, color: isOn ? "green" : "red"}}>
            {isOn ? "On" : "Off"}
        </Text>
        <Text  onPress={()=> setIsOn (!isOn)} style={{fontSize:50}}>Toggles</Text>
    </View>
  );
}
