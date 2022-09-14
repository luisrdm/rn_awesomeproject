import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const HungryCat = (props) => {

    const [isHungry, setIsHungry] = useState(true);
    let [beenFed, setBeenFed] = useState(0);

    return (
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? "hungry" : "full"}
            </Text>
            <Text>
                I've been fed {beenFed} times!
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(!(isHungry));
                    setBeenFed(beenFed + 1);
                }}
                //disabled={!isHungry}
                title = {isHungry ? "Pour me some milk, please!" : "Thank you"}
            />
        </View>
    );
};

export default HungryCat;