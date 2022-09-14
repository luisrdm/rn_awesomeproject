import React from 'react';
import {Text, View, Image} from 'react-native';
import Cat from './Cat';

const CatApp = (props) => {
    return (
        <View>
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                style={{width: 200, height: 200}}
            />
            <Text>Hello, I'm your cat {props.name}</Text>
        </View>
    );
};

export default CatApp;