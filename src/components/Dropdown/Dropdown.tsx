import React from 'react';
import { View, Image } from 'react-native';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export interface Props {
    size?: number;
    placeholder: string;
    options: Array<any>;
}

const AddDropdown: React.FC<Props> = props => {
    const options = props.options;

    const arrowClosed = (
        <Image
            style={{ position: 'absolute', right: 10, top: 14, width: 9, height: 9 }}
            source={require('./arrow.svg')}
        />
    )
    const arrowOpen = (
        <Image
            style={{ position: 'absolute', transform: [{ rotate: '180deg' }], right: 10, top: 14, width: 9, height: 9 }}
            source={require('./arrow.svg')}
        />
    )

    return (
        <View style={{ marginBottom: 200, width: props.size || 220 }}>
            <Dropdown
                arrowClosed={arrowClosed}
                arrowOpen={arrowOpen}
                options={options}
                placeholder={props.placeholder || 'Choisir une option..'}
            />
        </View>
    );
};

export default AddDropdown;
