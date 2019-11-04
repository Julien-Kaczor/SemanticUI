import React from 'react';
import { View } from 'react-native';

import Button from './components/Button/Button';
import Input from './components/Input/Input';
import InputNumber from './components/Input/InputNumber';
import Dropdown from './components/Dropdown/Dropdown';
import Switch from './components/Switch/Switch';
import Search from './components/Input/InputSearch';
import InputDate from './components/Input/InputDate'

function App() {

  const optionsDropdown = [
    {
      key: 'opt1',
      text: 'opt1',
      value: 'Option 1',
    },
    {
      key: 'opt2',
      text: 'opt2',
      value: 'Option 2',
    },
    {
      key: 'opt3',
      text: 'opt3',
      value: 'Option 3',
    },
  ];

  return (
    <View style={{ position: 'absolute', marginTop: 25, left: '43%', justifyContent: 'center' }}>

      <Button color='#78DBD9' />
      <Button color='#AFAFAF' />
      <Button color='#FF302B' />
      <Button color='#FCD200' />

      <Input />

      <InputNumber />

      <InputNumber disabled={true} />

      <Switch />

      <Switch disabled={true} />

      <Search />

      <InputDate />

      <Dropdown options={optionsDropdown} />

    </View>
  );
}

export default App;
