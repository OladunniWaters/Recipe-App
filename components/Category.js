import { View, Text,  SafeAreaView, FlatList, StatusBar, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { useState, useEffect} from 'react';
import Recipe from '../components/Recipe';

const Category = () => {


    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
 
    const [recipes, setRecipes] = useState([]);
  
    const fetchRecipe = async () => {
    const url = apiUrl;
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.meals)
   }
  
   useEffect(() => {
    fetchRecipe();
   }, [])
  
   const [category, setCategory] = useState(recipes)
  
   const filterResult = (catItem) => {
    const result = recipes.filter((curDate) => {
      return curDate.strCategory === catItem
    });
    setCategory(result)
   }



   return (
    <SafeAreaView>
      <StatusBar
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor = "#00BCD4"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
         />
       
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <TouchableOpacity
            onPress={() => filterResult("Beef")}
         >
          <Text>Beef</Text>
         </TouchableOpacity>

         <TouchableOpacity
            onPress={() => filterResult("Chicken")}
         >
          <Text>Chicken</Text>
         </TouchableOpacity>
      </ScrollView>

        <View >
               <FlatList 
                data={category}
                renderItem={({ item }) => <Recipe data={item}/>}
                keyExtractor={(item) => item.idMeal}
                showsVerticalScrollIndicator={false}
                numColumns={2}
              />    
        </View>   
    </SafeAreaView>
  )
}

export default Category