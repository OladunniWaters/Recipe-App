import { View, Text, SafeAreaView, FlatList, StatusBar, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Recipe from '../components/Recipe';
import CategoryBtn from '../components/CategoryBtn';




const HomeScreen = () => {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
 
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const fetchRecipe = async () => {
  const url = apiUrl + query;
  const response = await fetch(url);
  const data = await response.json();
  setRecipes(data.meals)
 }

 useEffect(() => {
  fetchRecipe();
 }, [])


 const handleSearch = (text) => {
  if (!text.length) {
    fetchRecipe()
  } else {
    setQuery(text)
  }
 }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = "#0c0c0b"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
         />
       
       <View style={{ flex: 1, padding: 20, backgroundColor: '#eaedf1'}}>

      <View style={{  backgroundColor: '#0c0c0b',position: 'absolute', width: 500, height: 280 }}></View> 
       <View style={styles.titleCont}>
          <Text style={styles.title}>
            Get amazing recipes for cooking
          </Text>
       </View>
         
         <View>
            <TextInput
              placeholder="Search Recipes"
              placeholderTextColor={'#686F82'}
              onChangeText={handleSearch}
              style={[styles.input, styles.elevation]}
            />
            
            <TouchableOpacity
                style={styles.searchIcon}
                onPress={handleSearch}
            >
              <Ionicons name="search" size={32} color="#27ae61" />
            </TouchableOpacity>
         </View>

         <View><CategoryBtn /></View>    
         
        <View style={{ maxHeight: 450 }}>
            {recipes
            ? <FlatList
                data={recipes}
                renderItem={({ item }) => <Recipe data={item}/>}
                keyExtractor={(item) => item.idMeal}
                showsVerticalScrollIndicator={false}
                numColumns={2}
              />
            : <Text>No recipes found</Text>}
             
        </View>
      </View>     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    color: '#fff',
    lineHeight: 29,
    width: 343,
    height: 58,
    marginLeft: 10
  },
  input: {
    width: 300,
    height: 44,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#fff',
    paddingLeft: 10,
    backgroundColor: '#fff',
    marginLeft: 10
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000',
  },
  searchIcon: {
    position: 'absolute',
    top: 25,
    right: 20
  },
  titleCont: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    color: '#181818',
    marginTop: 10
  }, 
})

export default HomeScreen