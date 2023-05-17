import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { quotes } from './data/quotes';
import { generateRand } from './utils/numberGenerator';

export default function App() {
  const name = "JP"
  const quote = quotes[generateRand(quotes.length)]
  
  return (
    <View style={styles.container}>
      <Text>Hi {name}</Text>
      <Text>Get Better Daily.</Text>
      <Text>{quote.text}</Text>
      <Text>{quote.author}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
