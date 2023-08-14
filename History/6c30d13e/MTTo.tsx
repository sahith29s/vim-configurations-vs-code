import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren } from 'react'
import DiceOne from "../assets/One.png"
import React from 'react'

type  DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

export default function App(): JSX.Element {
  return (
    <View>
    <Image source={require("../assets/Five.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({})