import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { PortalProvider } from "@gorhom/portal";
import Header from "../components/Header";
import HomeSearchInput from "../components/HomeSearchInput";
import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";
import { colorStyles } from "../utils/GlobalStyles";
import BottomNavigation from "../components/BottomNavigation";
import BottomSheet from "../components/BottomSheet";
import AddProductBottomSheet from "../components/AddProductBottomSheet";
import SortBottomSheet from "../components/SortBottomSheet";
import FilterBottomSheet from "../components/FilterBottomSheet";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
const Home = ({ navigation, route }) => {
  const addModalRef = useRef(null);
  const sortModalRef = useRef(null);
  const filterModalRef = useRef(null);
  const OpenModal = (ref) => {
    ref.current?.open();
  };
  const CloseModal = (ref) => {
    ref.current?.close();
  };

  const rightButtons = [
    <TouchableOpacity onPress={(_) => OpenModal(addModalRef)}>
      <Feather name="plus-square" size={24} color={colorStyles.StrongBlue} />
    </TouchableOpacity>,
    <TouchableOpacity onPress={(_) => OpenModal(filterModalRef)}>
      <Feather name="filter" size={24} color={colorStyles.StrongBlue} />
    </TouchableOpacity>,
    <TouchableOpacity onPress={(_) => OpenModal(sortModalRef)}>
      <FontAwesome5
        name="sort-alpha-down"
        size={24}
        color={colorStyles.StrongBlue}
      />
    </TouchableOpacity>,
  ];

  return (
    <PortalProvider>
      <SafeAreaView style={styles.container}>
        <Header title={"Products"} rightButtons={rightButtons} />
        <HomeSearchInput placeholder="Search" icon="search" />
        <Categories
          data={["All", "Jeans", "Hoodies", "T-shirts", "Nike", "Adidas"]}
        />
        <ProductsList
          data={[
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
            {
              name: "This is a title here",
              image: "https://i.ibb.co/tm8RRYt/Img.png",
              sizes: { XS: 20, S: 25, M: 0, L: 9, XL: 30, ALL: 102 },
            },
          ]}
        />

        <BottomNavigation navigation={navigation} route={route} />
        <BottomSheet modalRef={addModalRef} height={500}>
          <AddProductBottomSheet closeModal={() => CloseModal(addModalRef)} />
        </BottomSheet>

        <BottomSheet modalRef={sortModalRef} height={500}>
          <SortBottomSheet closeModal={() => CloseModal(sortModalRef)} />
        </BottomSheet>
        <BottomSheet modalRef={filterModalRef} height={500}>
          <FilterBottomSheet closeModal={() => CloseModal(filterModalRef)} />
        </BottomSheet>
      </SafeAreaView>
    </PortalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colorStyles.White,
  },
});

export default Home;
