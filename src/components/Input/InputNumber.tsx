import React from 'react';
import { View } from 'react-native';
import NumericInput from 'react-numeric-input';

// import Styles from './Style'

export interface Props {
    size?: number;
    value?: number;
    min?: number;
    max?: number;
    disabled: boolean;
    outlineColor: string;
}

const addInputNumber: React.FC<Props> = props => {
    return (
        <View style={{ marginBottom: 20 }}>
            <NumericInput
                value={props.value || 1}
                size={props.size || 5}
                min={props.min || 1}
                max={props.max || 100}
                disabled={props.disabled}
                style={{
                    input: {
                        padding: 5,
                        outlineColor: props.outlineColor || '#78DBD9'
                    },
                    arrowUp: {
                        fontSize: 15
                    },
                    arrowDown: {
                        fontSize: 15
                    },
                    btn: {
                        left: 38,
                        width: 15,
                    },
                }} />
        </View>
    );
};

export default addInputNumber;
