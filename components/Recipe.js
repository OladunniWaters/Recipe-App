import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';




const Recipe = ({ data }) => {
  
  const navigation = useNavigation();

  return (
     <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.card, styles.elevation]}>
            <Image 
              style={{
                width: 100,
                height: 100,
                borderRadius: 200/2,
                borderWidth: 2,
                borderColor: "#26AE60",
                marginTop: -20
              }}
              resizeMode="contain"
              source={{
                uri: `${data.strMealThumb}`
              }}
            />

            <View style={{ position: 'absolute', top: 15, right: 5, backgroundColor: '#eaedf1', borderRadius: 200/2, width: 30, height: 30}}>
             <Image 
              style={{
                width: 20,
                height: 20,
                tintColor: '#27ae61',
                position: 'absolute',
                marginTop: 6,
                marginLeft: 5
              }}
              resizeMode="contain"
              source={{
                uri: `https://cdn-icons-png.flaticon.com/128/2030/2030957.png`
              }}
            />
          </View>


            <View>
                <Text style={styles.strCategory}>{data.strMeal}</Text>
                <Text style={styles.strCategory}>{data.strCategory}</Text>
            </View>

            <View>
                <TouchableOpacity 
                   onPress={() => navigation.navigate("Detail", { data })} 
                   style={{ 
                    position: 'absolute', 
                    left: -25, 
                    width: 50, 
                    height: 20, 
                    backgroundColor: "#27ae61", 
                    borderRadius: 50/2,
                    marginTop: 10
                   }}>
                  <Ionicons name="arrow-forward" size={20} color="#FFF" style={{ marginLeft: 15 }}/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 140,
    height: 230,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000',
  },
  strMeal: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#0c0c0b',
  },
  strCategory: {
    color: '#0c0c0b',
    justifyContent: 'center',
    display: 'flex',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
})

export default Recipe

