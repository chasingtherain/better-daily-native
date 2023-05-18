import { Button, FlatList, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

const DATA = [
    {
        title: 'All Your Entries',
        route: 'All Entries'
    },
    {
        title: 'Feedback',
        route: 'Feedback'
    },
];

const renderItem = ({ item, navigation }) => {
    console.log(item, navigation)
    return (
      <View>
        <TouchableOpacity
            onPress={() => navigation.navigate(item.route)}
        >
            <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
};
  
const Separator = () => {
    return <View style={styles.separator} />;
};
export default function ProfileScreen(props) {
    const {navigation} = props
    // console.log(navigation)
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>Dark Mode</Text>
                <Switch 
                    value={"test"} 
                    onValueChange={() => console.log("toggle triggered")} />
            </View>
            <FlatList
                data={DATA}
                renderItem={(props) => renderItem({ ...props, navigation: navigation })}
                keyExtractor={(item) => item.title}
                ItemSeparatorComponent={Separator}
            />
            <Button 
                title="Log Out" 
                onPress={() => console.log("log out triggered")} />
            <StatusBar style="auto" />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    label: {
      flex: 1,
      marginRight: 12,
      fontSize: 17,
      fontWeight: "700"
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
        marginTop: 10,
    },
  });
  