
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sandbox = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.boxOne} >One</Text>
        <Text style={styles.boxTwo} >Two</Text>
        <Text style={styles.boxThree} >Three</Text>
        <Text style={styles.boxFour} >Four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'voilet',
        padding: 10,
    },
    boxTwo: {
         backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
         backgroundColor: 'coral',
        padding: 10,
    },
    boxFour: {
         backgroundColor: 'skyblue',
        padding: 10,
    }

})

export default Sandbox