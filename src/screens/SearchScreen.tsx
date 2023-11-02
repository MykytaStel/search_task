import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import {Product} from '../types';
import {token} from '../constants';

const SearchScreen: React.FC = ({navigation}: any) => {
  const [newData, setData] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>('');

  const fetchData = async (inputQuery: string, page: number = 1) => {
    const config = {
      headers: {Authorization: `Bearer ${token}`},
      params: {
        limit: 20,
        p: page,
        q: inputQuery,
        world: 'de',
      },
    };

    const {data} = await axios.get(
      'https://api.eduki.com/api/v1/elastic',
      config,
    );
    setData(prevData => [...prevData, ...data.data.items.materials]);
  };

  const onSearch = (inputQuery: string) => {
    setQuery(inputQuery);
  };

  const loadMore = () => {
    fetchData(query);
  };

  useEffect(() => {
    if (query) {
      setData([]);
      fetchData(query);
    }
  }, [query]);

  return (
    <View>
      <SearchBar onSearch={onSearch} />
      <ProductList data={newData} navigation={navigation} loadMore={loadMore} />
    </View>
  );
};

export default SearchScreen;
