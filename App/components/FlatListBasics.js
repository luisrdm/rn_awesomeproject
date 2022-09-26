import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        xflex: 1,
        paddingTop: 22
    },
    itemStyle: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});

const FlatListBasics = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={[
                    {key: 'Devin1'},
                    {key: 'Devin2'},
                    {key: 'Devin3'},
                    {key: 'Devin4'},
                    {key: 'Devin5'},
                    {key: 'Devin6'},
                    {key: 'Devin7'},
                    {key: 'Devin8'},
                    {key: 'Devin9'},
                    {key: 'Devin10'},
                    {key: 'Devin11'},
                    {key: 'Devin12'},
                    {key: 'Devin13'},
                    {key: 'Devin14'},
                    {key: 'Devin15'},
                    {key: 'Devin16'},
                    {key: 'Devin17'},
                    {key: 'Devin18'},
                    {key: 'Devin19'},
                    {key: 'Devin20'},
                    {key: 'Devin21'},
                ]}
                renderItem = {({item}) => 
                    <Text style={styles.itemStyle}>Hi!, {item.key}</Text>
                }
            />
        </View>
    );

};

export default FlatListBasics;