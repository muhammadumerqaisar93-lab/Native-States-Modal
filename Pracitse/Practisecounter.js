import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Practisecounter = () => {
    const [addition, setaddition] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Text style={{ fontSize: 50 }}> {addition}</Text>
                <View style={{ flexDirection: 'row', gap: 30 }}>
                    <Text onPress={() => setaddition(addition + 1)} style={{ fontSize: 50 }}>+</Text>
                    <Text onPress={() => setaddition(addition - 1)} style={{ fontSize: 50 }}>-</Text>
                </View>
                <Text style={{ fontSize: 30 }} onPress={() => { setaddition(0) }}>Rest Counter</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subcontainer: {}


});

export default Practisecounter