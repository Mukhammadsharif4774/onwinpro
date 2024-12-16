import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import OnwinHeader from '../components/OnwinHeader';
import OnwinMenuComponent from '../components/OnwinMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {onWinProducts} from '../helpers/onWinProducts';

const categories = [
  {label: 'Холодные закуски'},
  {label: 'Супы'},
  {label: 'Основные блюда'},
];

const OnwSportCategoryButton = ({label, active, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryButton}>
    <Text style={active ? styles.categoryActive : styles.category}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function OnwinHomeScreen() {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <View style={styles.container}>
      <OnwinHeader />

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <OnwSportCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
            image={item?.image}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {onWinProducts[category].map((product, index) => (
          <OnwinMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width,
    marginVertical: 15,
  },
  categoryButton: {
    width: '30%',
    marginTop: 5,
  },
  category: {
    fontFamily: FONTS.regular,
    color: COLORS.black,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.black,
    height: 50,
  },
  categoryActive: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.main,
    height: 50,
    backgroundColor: COLORS.main,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
});
