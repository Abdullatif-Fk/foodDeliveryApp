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
  PopularSection,
  RecommendedSection,
  Search,
} from '../../components';
import {dummyData} from '../../constants';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([]);
  const [menuList, setMenuList] = React.useState([]);
  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);
  const handleChangeCategory = (categoryId, menuTypeId) => {
    //Find Popular List
    let selectedPopular = dummyData.menu.find(menu => menu.name == 'Popular');

    // Find Recommended List
    let selectedRecommend = dummyData.menu.find(
      menu => menu.name == 'Recommended',
    );
    // Find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);
    // Set the Popular Menu base on the category id
    setPopular(
      selectedPopular?.list.filter(food =>
        food.categories.includes(categoryId),
      ),
    );
    // Set the Recommended Menu base on the categoryId
    setRecommends(
      selectedRecommend?.list.filter(food =>
        food.categories.includes(categoryId),
      ),
    );
    //Set the menu based on the categoryId
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
    // console.log(menuList);
  };
  return (
    <View style={styles.container}>
      {/* Search */}
      <Search
        handleChangeCategory={handleChangeCategory}
        setMenuList={setMenuList}
      />
      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <PopularSection popular={popular} />
            <RecommendedSection recommends={recommends} />
            <MenuTypes
              handleChangeCategory={handleChangeCategory}
              selectedCategoryId={selectedCategoryId}
              setSelectedMenuType={setSelectedMenuType}
              selectedMenuType={selectedMenuType}
            />
          </>
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
    flex: 0.7,
  },
});
export default Home;
