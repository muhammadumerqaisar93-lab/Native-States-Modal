import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Counter() { 
  const [addition, setAddition] = useState (0); 
  const [increment, setIncrement] = useState (0); 
  const [decrement, setDecrement] = useState (0); 

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>{addition}</Text>
        <Text>{increment}</Text>
        <Text>{decrement}</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        
      <Text onPress={()=> setAddition(addition + 1)}>+</Text>
      <Text onPress={()=> setIncrement(increment+1)}>+</Text>
      <Text onPress={()=> setDecrement(decrement+1)}>+</Text>
     
      </View>

      <View style={{flexDirection:'row'}}>
    <Text onPress={()=> setAddition(addition-1)}>-</Text>
      <Text onPress={()=> setIncrement(increment-1)}>-</Text>
      <Text onPress={()=> setDecrement(decrement-1)}>-</Text>
    
      </View>
      <View>
        <Text onPress={()=> {setAddition(0);setIncrement(0); setDecrement(0); }}>Reset Text</Text>

      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
