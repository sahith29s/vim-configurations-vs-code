import { Image, TouchableOpacity, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 21
                    </Text>
                </View>

                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcjLY6jjYQtxn0-IynG_h6S021Qkz_jaiwg"
                    }}
                    style={styles.cardImage}
                >
                </Image>

                <View style={styles.bodyContainer}>

                    <Text>
                        bodyk
                    </Text>

                </View>

                <View style={styles.bodyFooter}>
                    <Text>Footer</Text>
                </View>

                <TouchableOpacity
                    onPress={() => { openWebsite("https://www.google.com/") }}
                >
                    <Text>sahith</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bodyFooter: {},

    headingText: {
        // fontSize : 24,
        // fontWeight : "bold",
        // paddingHorizontal : 8
    },

    bodyContainer: {},

    card: {},

    headingContainer: {},
    headerText: {},

    elevatedCard: {},
    cardImage: {
        height: 300
    }

})