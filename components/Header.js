import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            
      <Text style={styles.title}>Get your List Ready!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 90,
        paddingTop:48,
        backgroundColor:'coral'
    },
    title:{
        textAlign: 'center',
        color:'#fff',
        fontSize: 20,
        fontWeight:'bold'
    }
})