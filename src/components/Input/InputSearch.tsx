import React from 'react';
import { View, TextInput, Image } from 'react-native';

import Styles from './Style'

export interface Props {
    size?: number;
    color: string;
    placeholder: string;
    borderColor: string;
    borderRadius?: number;
    padding?: number;
    outlineColor: string;
    disabled: boolean;
}

const InputSearch: React.FC<Props> = props => {
    return (
        <View style={[
            Styles.inputContainer,
            {
                width: props.size || 295,
                backgroundColor: props.color || '#F1F3F4',
                borderColor: props.borderColor || '#D6D6D6',
                borderWidth: 1,
                marginBottom: 20,
                borderRadius: props.borderRadius || 4,
            },
        ]}>
            <TextInput style={[Styles.inputStyle, { outlineColor: props.outlineColor || '#78DBD9', padding: props.padding || 7}]} placeholder={props.placeholder || 'Recherche Général'} disabled={props.disabled} />
            <Image
                style={{ position: 'absolute', right: 10, marginTop: 3, width: 23, height: 23 }}
                source={require('./search.svg')}
            />
        </View>
    );
};

export default InputSearch;
