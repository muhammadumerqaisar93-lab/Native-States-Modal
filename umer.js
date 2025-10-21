import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Data = [
  { id: 1, Image: require('./Pictures/Pictures/coffee1.png'), title: "Mocha", subtitle: "has coffee" },
  { id: 2, Image: require('./Pictures/Pictures/coffee2.png'), title: "Latte", subtitle: "has coffee" },
  { id: 3, Image: require('./Pictures/Pictures/coffee2.png'), title: "Espresso", subtitle: "has coffee" },
];

const Buttons = [
  { id: 1, name: 'CATEGORY 1', cross: require('./Pictures/Pictures/cross.png') },
  { id: 2, name: 'CATEGORY 2', cross: require('./Pictures/Pictures/cross.png') },
  { id: 3, name: 'CATEGORY 3', cross: require('./Pictures/Pictures/cross.png') },
];

export default function Practisecounter() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const selectedCategory = Buttons.filter(btn => btn.id === selectedItemId);

  return (
    <View style={styles.container}>

      {selectedItemId && (
        <FlatList
          data={selectedCategory}
          horizontal
          renderItem={({ item: btn }) => (
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{btn.name}</Text>
              <TouchableOpacity onPress={() => setSelectedItemId(null)}>
                <Image source={btn.cross} style={styles.crossIcon} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, item.id === selectedItemId && styles.selectedCard]}
            onPress={() =>
              setSelectedItemId(prev => (prev === item.id ? null : item.id))
            }
          >
            <Image source={item.Image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonList: {
    paddingHorizontal: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 25,
    paddingHorizontal: 18,
    height: 45,
    marginHorizontal: 8,
    alignSelf: 'center', // 👈 center align
  },
  categoryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 10,
  },
  crossIcon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
    backgroundColor: 'red',
    borderRadius: 9,
    padding: 3,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 15,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  selectedCard: {
    backgroundColor: '#d0caff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
    marginTop: 3,
  },
});
