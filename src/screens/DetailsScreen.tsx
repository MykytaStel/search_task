import React from 'react';
import {View, Button} from 'react-native';
import ProductDetails from '../components/ProductDetails';
import {Product} from '../types';

interface Props {
  route: {params: {item: Product}};
  navigation: any;
}

const DetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <ProductDetails item={item} />
    </View>
  );
};

export default DetailsScreen;
