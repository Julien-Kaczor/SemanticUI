import React, { useState } from 'react';
import { View, Switch } from 'react-native';

export interface Props {
    disabled: boolean;
}

const SwitchButton: React.FC<Props> = props => {
    const [value, setValue] = useState(false);
    return (
        <View>
            <Switch
                style={{ marginBottom: 20 }}
                onValueChange={() => setValue(!value)}
                value={value}
                tintColor='#eaeef1' disabled={props.disabled} />
        </View>
    );
};

export default SwitchButton;
