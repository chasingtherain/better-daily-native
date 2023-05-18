import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, ScrollView, View } from 'react-native';

export default function DailyEntryScreen() {
    const [currentPage, setCurrentPage] = useState(0)
    console.log(currentPage)

    const handlePrev = () => {
        setCurrentPage(prevPage => prevPage - 1);
    }

    const handleNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }

    return (
        <ScrollView style={styles.container}>
            <Text>current page: {currentPage}</Text>
            {
            currentPage == 0 &&
            (<>
                <Text style={styles.label}>I am thankful for</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Field 1"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Field 2"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Field 3"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
            </>)
            }
            {
            currentPage == 0 &&
            (<>
                <Text style={styles.label}>My three key focus for the day</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Field 1"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Field 2"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Field 3"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
            </>)
            }
            { currentPage == 1 &&
            (<>
                <Text style={styles.label}>What went well yesterday?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Field 1"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Field 2"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Field 3"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
            </>)
            }
            { currentPage == 1 &&
            (<>
                <Text style={styles.label}>What did not well yesterday?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Field 1"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Field 2"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Field 3"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
            </>)
            }
            { currentPage == 2 &&
            (<>
                <Text style={styles.label}>What is one thing you wish to improve on?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Field 1"
                    // value={""}
                    // value={formValues.field1}
                    // onChangeText={(value) => handleInputChange('field1', value)}
                />
            </>)
            }
            <View style={styles.navBtnContainer}>
                <Button
                    style={styles.navButtons}
                    title="Previous"
                    disabled={currentPage <= 0}
                    onPress={handlePrev} />
                <Button
                    style={styles.navButtons}
                    title="Next"
                    disabled={currentPage >= 2}
                    onPress={handleNext} />
            </View>
            { currentPage == 2 &&
            <Button 
                style={styles.submitBtn}
                title="Submit" 
                onPress={() => console.log("submitted")} />
            }
            <StatusBar style="auto" />
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      padding: 8,
      marginBottom: 16,
    },
    label: {
        marginBottom: 4,
        fontSize: 16,
      },
      submitBtn:{
        marginBottom: 10,
      },
      navBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginBottom: 20,
      },
      navButtons: {
        //   width:200
      },
  });