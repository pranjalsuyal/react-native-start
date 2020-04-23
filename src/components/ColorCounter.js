import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {
    return(
        <View>
            <Text style={styles.textStyle}>{colorName}</Text>
            <Button 
                title={`More ${colorName}`}
                onPress={()=>onIncrease()}
            />
            <Button
                title={`Less ${colorName}`}
                onPress={()=>onDecrease()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize:25,
        textAlign: "center"
    }
});

export default ColorCounter;