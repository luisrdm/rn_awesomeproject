import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },

});

const SectionListBasics = () => {
    return(
        <View style={styles.container}>
            <SectionList
                sections={[
                    {title: "D", data: ["Devin", "Dan", "Dominique" ]},
                    {title: "J", data: ["Jan", "Junior", "Jennifer",'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie', "Jeremy", "Juan", "Julian", "Justo", "Justina" ]}
                ]}
                renderItem = {({item, index}) => 
                    <Text style={styles.item}>
                        {item} {index}
                    </Text>
                }
                renderSectionHeader = {({section}) => 
                    <Text style={styles.sectionHeader}>
                        {section.title}
                    </Text>
                }
                keyExtractor = {(item, index) => `basicListEntry-${item.title}-${index}`}
            />
        </View>
    );
};

export default SectionListBasics;