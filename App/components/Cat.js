import React from 'react';
import { Text } from 'react-native';

const upperName = (name) => {
    return name.toUpperCase();
}

const Cat = () => {
    const name = "Haru";
    return (
        <Text>Hello, I'm {upperName(name)} the cat!</Text>
    );
}

export default Cat;