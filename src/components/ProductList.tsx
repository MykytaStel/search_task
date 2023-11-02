import React from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Product} from '../types';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<any, 'Details'>;

interface Props {
  data: Product[];
  navigation: NavigationProp;
  loadMore: () => void;
}

const ProductList: React.FC<Props> = ({data, navigation, loadMore}) => {
  const renderItem = ({item}: {item: Product}) => {
    const {firstPreviewImage, title, author, price} = item;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {item})}>
        <Image
          source={{uri: firstPreviewImage.watermarked}}
          style={styles.productImage}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{author.details.publicName}</Text>
        <Text>{`€${price.toFixed(2)}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item.title.toString()}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
});
