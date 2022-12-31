import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react'

const CategoryBtn = () => {
  return (
    <View style={{ marginBottom:40 , marginLeft: 10, marginRight: 10}}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{
             backgroundColor: '#27ae61',
             width: 100,
             borderRadius: 20,
             padding: 4,
             marginRight: 10,
        }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-evenly'}}>
          <Image
            style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
            }}
            source={{
                uri: `https://cdn-icons-png.flaticon.com/128/1699/1699358.png`
            }} 
          />
          <Text style={{ color: '#fff', fontSize: 15, marginTop: 3}}>Beef</Text>
         </View>
        </TouchableOpacity>



        <TouchableOpacity style={{
             backgroundColor: '#fff',
             width: 100,
             borderRadius: 20,
             padding: 4,
             marginRight: 10
        }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-evenly'}}>
          <Image
            style={{
                width: 30,
                height: 30,
                tintColor: '#27ae61',
            }}
            source={{
                uri: `https://cdn-icons-png.flaticon.com/128/2329/2329903.png`
            }} 
          />
          <Text style={{ color: '#27ae61', fontSize: 15, marginTop: 3}}>Vegan</Text>
         </View>
        </TouchableOpacity>


        <TouchableOpacity style={{
             backgroundColor: '#fff',
             width: 100,
             borderRadius: 20,
             padding: 4,
             marginRight: 10
        }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-evenly'}}>
          <Image
            style={{
                width: 30,
                height: 30,
                tintColor: '#27ae61',
            }}
            source={{
                uri: `https://cdn-icons-png.flaticon.com/128/7780/7780169.png`
            }} 
          />
          <Text style={{ color: '#27ae61',fontSize: 15, marginTop: 3}}>Seafood</Text>
         </View>
        </TouchableOpacity>



        <TouchableOpacity style={{
             backgroundColor: '#fff',
             width: 100,
             borderRadius: 20,
             padding: 4
        }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-evenly'}}>
          <Image
            style={{
                width: 30,
                height: 30,
                tintColor: '#27ae61',
            }}
            source={{
                uri: `https://cdn-icons-png.flaticon.com/128/754/754406.png`
            }} 
          />
          <Text style={{ color: '#27ae61',fontSize: 15, marginTop: 3}}>Pasta</Text>
         </View>
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default CategoryBtn