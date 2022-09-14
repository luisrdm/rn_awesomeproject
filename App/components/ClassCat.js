import React, { Component } from 'react';
import { Text } from 'react-native';

class ClassCat extends Component {
    render(){
        const name = "Garfield";
        return(
            <Text>This is a ClassCat for {name} !!!!</Text>
        );
    };
};

export default ClassCat;