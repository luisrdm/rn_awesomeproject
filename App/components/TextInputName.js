import React, { useState } from 'react';
import { View, Label, TextInput, Text } from 'react-native';

const TextInputName = () => {
    const [textName, setTextName]= useState('');

    return (
        <View style={{padding: 10}}>
            <Text>Ingresá un nombre para el gato.</Text>
            {/* <Label>
                Nombre */}
                <TextInput 
                    style={{borderWidth: 1, borderColor: '#3333ff', padding: 10, fontSize: 18 }}
                    placeholder='Ingresá el nombre del gato.'
                    onChangeText={newText => setTextName(newText)}
                />
            {/* </Label> */}
            <Text style={{padding: 10, fontSize: 18}}>El nombre ingresado es: {textName}</Text>
        </View>
    );
};

export default TextInputName;