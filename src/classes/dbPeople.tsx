import React, {useState} from 'react';
import {TextInput} from 'react-native';

const home = () => {
  const [input, setInput] = useState('');
  return (
    <TextInput
      style={{height: 40, borderColor: 'blue', borderWidth: 3}}
      onChangeText={(text) => setInput(text)}
      value={input}
    />
  );
};

export default home;