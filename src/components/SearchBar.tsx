import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({onSearch}) => {
  const [inputQuery, setInputQuery] = useState<string>('');

  const handlePress = () => {
    onSearch(inputQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputQuery}
        placeholder="Search..."
        onChangeText={text => setInputQuery(text)}
      />
      <TouchableOpacity onPress={handlePress}>
        <Icon name="search" size={20} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingRight: 10,
    paddingLeft: 10,
    margin: 10,
    borderColor: '#333',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
    backgroundColor: 'transparent',
    marginRight: 10,
  },
});
