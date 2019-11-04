import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles'

export interface Props {
  label: string;
  color: string;
  labelColor: string;
  size?: number;
  padding?: number;
  borderRadius?: number;
}

const AddButton: React.FC<Props> = props => {
  return (
    <View style={[
      Styles.buttonContainer,
      {
        width: props.size || 20,
      },
    ]}>
      <TouchableOpacity style={[
        Styles.buttonStyle,
        {
          backgroundColor: props.color || '#78DBD9',
          padding: props.padding || 10,
          borderRadius: props.borderRadius || 5,
        },
      ]}>
        <Text style={[Styles.labelColor, { color: props.labelColor || '#FFF' }]}>{props.label || 'PRESS ME'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
