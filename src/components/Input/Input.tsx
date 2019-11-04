import React from 'react';
import { View, TextInput } from 'react-native';
import Styles from './Style'

export interface Props {
    buttonStyle: any;
    size?: number;
    color: string;
    placeholder: string;
    borderColor: string;
    borderRadius?: number;
    padding?: number;
    outlineColor: string;
    disabled: boolean;
}

const AddInput: React.FC<Props> = props => {
    return (
        <View style={[
            Styles.inputContainer,
            {
                width: props.size || 195,
                backgroundColor: props.color || '#F1F3F4',
                borderColor: props.borderColor || '#D6D6D6',
                borderWidth: 1,
                marginBottom: 20,
                borderRadius: props.borderRadius || 4,
            },
        ]}>
            <TextInput style={[Styles.inputStyle, { outlineColor: props.outlineColor || '#78DBD9', padding: props.padding || 7 }]} placeholder={props.placeholder || 'Type here..'} disabled={props.disabled} />
        </View>
    );
};

export default AddInput;
