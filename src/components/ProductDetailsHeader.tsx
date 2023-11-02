import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';

interface HeaderProps {
  firstPreviewImage: {watermarked: string};
  title: string;
  author: {details: {publicName: string}};
  price: number;
  description: string;
  imageStyle: any;
}

export const ProductDetailsHeader: React.FC<HeaderProps> = ({
  firstPreviewImage,
  title,
  author,
  price,
  description,
  imageStyle,
}) => (
  <>
    <Image source={{uri: firstPreviewImage.watermarked}} style={imageStyle} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{author.details.publicName}</Text>
    <Text>{`Price: €${price}`}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.label}>Tags:</Text>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
});
