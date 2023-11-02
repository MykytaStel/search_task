import React, {useMemo} from 'react';
import {Text, Dimensions, StyleSheet, FlatList} from 'react-native';
import {Product} from '../types';
import {ProductDetailsHeader} from './ProductDetailsHeader';

interface Props {
  item: Product;
}

const ProductDetails: React.FC<Props> = ({item}) => {
  const {width, height} = Dimensions.get('window');
  const isLandscape = width > height;

  const imageStyle = useMemo(
    () => ({
      width: isLandscape ? width * 0.5 : width,
      height: isLandscape ? height : height * 0.5,
      marginBottom: 20,
    }),
    [isLandscape, height, width],
  );

  const {firstPreviewImage, title, author, price, description, tags} = item;

  return (
    <FlatList
      style={styles.container}
      data={tags}
      keyExtractor={tag => tag}
      renderItem={({item: tag}) => <Text>{tag}</Text>}
      ListHeaderComponent={() => (
        <ProductDetailsHeader
          {...{
            firstPreviewImage,
            title,
            author,
            price,
            description,
            imageStyle,
          }}
        />
      )}
    />
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
