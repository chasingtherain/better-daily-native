import { Button, StyleSheet, Text, View } from 'react-native';
import { quotes } from '../data/quotes';
import { generateRand } from '../utils/numberGenerator';

export default function HomeScreen(props) {
    console.log(props.navigation)
    const name = "JP"
    const quote = quotes[generateRand(quotes.length)]
    return (      
        <View style={styles.container}>
            <Text>Hi {name}</Text>
            <Text>Get Better Daily.</Text>
            <Text>Quote of the day: {quote.text}</Text>
            <Text>{quote.author}</Text>
            <Button 
                title="Journal Today"
                onPress={() => props.navigation.navigate("Daily Entry")}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });