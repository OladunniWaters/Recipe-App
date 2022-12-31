import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


const DetailScreen = ({route}) => {
 const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>

        <StatusBar
         barStyle="light-content" 
         backgroundColor="transparent"
         translucent={true}
         networkActivityIndicatorVisible = {true}
         />

      

        <View style={{  justifyContent: 'center', display: 'flex' }}>
            <Image
               style={{
                position: 'absolute',
                width: 375,
                height: 300,
                left: 0,
                top: 0,
               }}
               source={{
                uri: `${data.strMealThumb}`
              }}
              resizeMode="cover"            
            />
        </View>

        <View>
          <TouchableOpacity style={{
          position: 'absolute',
          top: 100,
          right: 160,
          backgroundColor: 'white',
          width: 50,
          height: 50,
          borderRadius: 50/2,
        }}
         onPress={() => Linking.openURL(`${data.strYoutube}`)}
        >
            <Ionicons name="play" size={40} color="#27AE61" style={{ position: 'absolute', right: 3, top: 5 }}/>
          </TouchableOpacity>
        </View>


    
       <View style={{ 
           backgroundColor: '#fff',
           marginTop: 280,
           marginBottom: 20,
           borderTopLeftRadius: 40,
           borderTopRightRadius: 40,
           maxHeight: 1050
        }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View>
          <View style={{
             width: 50, 
             height: 5, 
             backgroundColor: '#686F82', 
             marginTop: 20,
             marginLeft: 155,
             borderRadius: 20

              }}></View>
        </View>

        <View>
            <Text style={{
              fontSize: 24, 
              fontWeight: 'bold' ,
              padding: 20,
              textAlign: 'center'
              }}>
                {data.strMeal}
              </Text>

            <Text style={{
              textAlign: 'center',
              color: '#27ae61',
            }}>
              {data.strCategory}
            </Text>
        </View>


        <View>
          <Text style={{ 
          textAlign: 'center', 
          fontSize: 15, 
          fontWeight: 'bold',
          marginTop: 30 
          }}>
            Ingredients
            </Text>
        </View>
        <View style={{
          padding: 30,
        }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient1}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure1}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient2}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure2}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient3}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure3}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient4}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure4}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient5}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure5}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient6}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure6}</Text>
            </View>
            
            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient7}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure7}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient8}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure8}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient9}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure9}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient10}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure10}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient11}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure11}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient12}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure12}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient13}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure13}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient14}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure14}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient15}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure15}</Text>
            </View>

            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient16}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure16}</Text>
            </View>
            
            <View style={{ backgroundColor: '#27ae61', width: 80, borderRadius: 10, padding: 5, marginRight: 10}}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strIngredient17}</Text>
              <Text style={{ textAlign: 'center', color: '#fff' }}>{data.strMeasure17}</Text>
            </View>
          </ScrollView>
        </View>

        <View><Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Directions</Text></View>
        <View style={{
          padding: 30,
        }}>
           <Text>{data.strInstructions}</Text>
        </View>
        </ScrollView>
      </View>
           
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default DetailScreen