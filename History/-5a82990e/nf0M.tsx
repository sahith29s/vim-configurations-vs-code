import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View>
                <Text>
                    Red
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize : 24,
        fontWeight : "bold",
        paddingHorizontal : 8
    }
})