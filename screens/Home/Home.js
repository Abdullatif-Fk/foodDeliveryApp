import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {
  HorizontalDivider,
  HorizontalfoodCard,
  MenuTypes,
  Search,
} from '../../components';
import {dummyData} from '../../constants';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = React.useState([]);
  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // Find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);
    //Set the menu based on the categoryId
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
  };
  return (
    <View style={styles.container}>
      {/* Search */}
      <Search />
      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <MenuTypes
            handleChangeCategory={handleChangeCategory}
            selectedCategoryId={selectedCategoryId}
            setSelectedMenuType={setSelectedMenuType}
            selectedMenuType={selectedMenuType}
          />
        }
        renderItem={({item, index}) => {
          return <HorizontalfoodCard item={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
