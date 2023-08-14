import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import React, { useState } from 'react'
import Card from './Card'

export default function App() {


  const [money, setMoney] = useState<Number>(10)
  const [convertedMoney, setConvertedMoney] = useState<Number>(0)
  const handleSubmit = (num: any) => {
    num = Number(num)
    let totalMoney: Number = +money * num
    setConvertedMoney(totalMoney)

  }
  return (
    <>
      <ScrollView >
        <View style={styles.container}>

          <View style={styles.convertedMoneyConta}>
            <Text style={styles.convertedMoney}>{+convertedMoney}</Text>
          </View>

          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={money.toString()}
            // onChange={(e) =>{console.log(e)}}
            onChangeText={(num) => { setMoney(+num) }}
          />

          <View style={{ marginTop: 15 }}></View>
          <View style={styles.cardContainer}>
            <TouchableOpacity onPress={(e: any) => { handleSubmit(0.012) }}>
              <Card value="dollars" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleSubmit(0.011) }}>
              <Card value="Euro" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleSubmit(0.049) }}>
              <Card value="Poland" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>

            <TouchableOpacity onPress={() => { handleSubmit(1.20) }}>
              <Card value="Rubel" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleSubmit() }}>
              <Card value="Aus Dollars" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleSubmit() }}>
              <Card value="Can Dollars" />
            </TouchableOpacity>

          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => { handleSubmit() }}>
              <Card value="Yen" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleSubmit(0.0037) }}>
              <Card value="Dinar" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleSubmit(0.0) }}>
              <Card value="Bitcoin" />
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>

    </>

  )
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: "row",
    gap: 15,
    marginVertical: 15

  },
  convertedMoney: {
    fontSize: 30
  },

  convertedMoneyConta: {
    marginVertical: 20,
    display: 'flex',
    alignItems: "center",
  },

  container: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: 300,
    backgroundColor: "white",
    color: "black",
    fontSize: 20


  }
})