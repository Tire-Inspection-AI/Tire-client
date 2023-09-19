import React from 'react';
import {Pressable, Text} from 'react-native';

const ButtonUI = props => {
  return (
    <Pressable
      style={{
        backgroundColor: props.backColor,
        width: props.width,
        borderRadius: 5,
        marginLeft: props.left,
        marginRight: props.right,
      }}
      onPress={props.func}>
      <Text
        style={{
          fontSize: props.textSize,
          color: props.textColor,
          alignSelf: 'center',
        }}>
        {props.text}
      </Text>
    </Pressable>
  );
};
export default ButtonUI;
