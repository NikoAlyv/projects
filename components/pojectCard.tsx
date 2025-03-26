import {
  Image,
  ImageProps,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { TypographyStyles } from '@/theme/typography';
import { CommonStyles } from '@/theme/common.styles';

export interface ICard {
  id?: number;
  title?: string;
  description?: string;
  image?: ImageProps | any;
  link?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const ProjectCard: React.FC<ICard> = ({
  title,
  image,
  onPress,
  style,
}) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        isSmallScreen ? styles.phoneCard : CommonStyles.row,
        style,
      ]}
    >
      <Text
        style={[
          TypographyStyles.montserrat24,
          styles.text,
          CommonStyles.textAlignCenter,
        ]}
      >
        {title}
      </Text>
      <Image
        style={[styles.image, isSmallScreen && styles.phoneImage]}
        source={image}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    ...CommonStyles.alignCenterJustifyBetweenRow,
    borderRadius: 20,
  },
  image: {
    flex: 1 / 3,
    width: '100%',
    maxWidth: 500,
    height: 250,
    resizeMode: 'cover',
  },
  text: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  phoneImage: {
    resizeMode: 'contain',
  },
  phoneCard: {
    flexDirection: 'column-reverse',
  },
});
