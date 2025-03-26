import { TypographyStyles } from '@/theme/typography';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Table } from './Table';
import React from 'react';

interface IContact {
  phone?: string;
  gmail?: string;
}
export const Contact: React.FC<IContact> = ({ phone, gmail }) => {
  const openGmail = () => {
    const url = `mailto:enihad801@gmail.com`;
    Linking.openURL(url);
  };
  const openPhone = () => {
    Linking.openURL(`tel:+994775329507`);
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Əlaqə Məlumatları</Text>
      <Table text={gmail} onPress={openGmail} />
      <Table text={phone} icon="phone" onPress={openPhone} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 60,
    padding: 20,
    backgroundColor: '#1E293B',
    borderRadius: 20,
  },
  title: {
    ...TypographyStyles.inter24,
    marginBottom: 20,
  },
});
