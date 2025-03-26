import { color } from '@/theme/colors';
import { CommonStyles } from '@/theme/common.styles';
import { Feather } from '@expo/vector-icons';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

interface ITable {
  text?: string;
  style?: StyleProp<ViewStyle>;
  icon?: any;
  iconColor?: string;
  onPress?: () => void;
}
export const Table: React.FC<ITable> = ({
  text,
  onPress,
  style,
  icon = 'mail',
  iconColor = color.blue,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, style]}>
      <Feather name={icon} size={20} color={iconColor} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    ...CommonStyles.alignCenterRow,
    gap: 10,
    marginBottom: 15,
  },
  text: {
    color: color.gray,
    fontSize: 16,
  },
});
