import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import Data from './Data';

const Mobile = () => {
  const [listData, setListData] = useState(Data);
  const [searchValue, setSearchValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [activeBrand, setActiveBrand] = useState(null);

  const handleSearchFilter = (value) => {
    setSearchValue(value);
    const newArray = Data.filter(item =>
      item.Name.toLowerCase().includes(value.toLowerCase())
    );
    setListData(newArray);
  };

  const handleFilterPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlesort = () => {
    const sortedArray = [...listData].sort((a, b) => a.Name.localeCompare(b.Name));
    setListData(sortedArray);
    setModalVisible(false);
  };

  const handlesortalter = () => {
    const sortedArray = [...listData].sort((a, b) => b.Name.localeCompare(a.Name));
    setListData(sortedArray);
    setModalVisible(false);
  };

  const handleSortByPriceHighToLow = () => {
    const sortedArray = [...listData].sort((a, b) => Number(b.Price) - Number(a.Price));
    setListData(sortedArray);
    setModalVisible(false);
  };

  const handleSortByPriceLowToHigh = () => {
    const sortedArray = [...listData].sort((a, b) => Number(a.Price) - Number(b.Price));
    setListData(sortedArray);
    setModalVisible(false);
  };

  const handleFilerBrand = (brand) => {
    const filteredArray = Data.filter(item =>
      item.Brand.toLowerCase() === brand.toLowerCase()
    );
    setListData(filteredArray);
    setActiveBrand(brand);
    setModalVisible(false);
  };

  const clearBrandFilter = () => {
    setActiveBrand(null);
    setListData(Data);
  };

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar */}
      <TextInput
        placeholder="Enter Model"
        placeholderTextColor="gray"
        value={searchValue}
        onChangeText={handleSearchFilter}
        style={styles.searchbar}
      />

      {/* 🔝 Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Phones</Text>

        <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
          <Text style={styles.filterText}>Filter</Text>
          <Image
            source={require('../assets/filter.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      {/* ✅ Show active brand just below “Phones” */}
      {activeBrand && (
        <View style={styles.activeFilterContainer}>
          <Text style={styles.activeFilterText}>Brand: {activeBrand}</Text>
          <TouchableOpacity onPress={clearBrandFilter} style={styles.clearButton}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>X</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 🔽 Modal Section */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filter Options</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <TouchableOpacity onPress={handleSortByPriceHighToLow} style={styles.optionButton}>
                <Text>Sort by Price High to Low</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSortByPriceLowToHigh} style={styles.optionButton}>
                <Text>Sort by Price Low to High</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlesort} style={styles.optionButton}>
                <Text>Sort by Ascending Order</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlesortalter} style={styles.optionButton}>
                <Text>Sort by Descending Order</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalTitle}>Filter by Brands</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <TouchableOpacity onPress={() => handleFilerBrand('samsung')} style={styles.optionButton}>
                <Text>Samsung</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFilerBrand('iphone')} style={styles.optionButton}>
                <Text>iPhone</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFilerBrand('infinix')} style={styles.optionButton}>
                <Text>Infinix</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 📱 Product List */}
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.Image} style={styles.Image} />
            <Text>{item.Name}</Text>
            <Text>{item.Brand}</Text>
            <Text>{item.Price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Mobile;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchbar: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  filterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  filterIcon: {
    width: 25,
    height: 25,
  },
  card: {
    alignItems: 'center',
    margin: 10,
  },
  Image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  optionButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  // ✅ active filter shown below "Phones"
  activeFilterContainer: {
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    width:200,
    paddingVertical: 8,
    marginTop: 10, // space below "Phones"
    marginBottom: 10,
  },
  activeFilterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  clearButton: {
    backgroundColor: 'black',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
