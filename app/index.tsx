import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-swiper";
import { slides } from "@/constants";

export default function Index() {
  const swiperRef = useRef<Swiper | null>(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        activeDotColor="green"
      >
        {slides.map((slide) => (
          <View style={styles.slide} key={slide.key}>
            <Image source={slide.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          </View>
        ))}
      </Swiper>

      <View style={styles.navigation}>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextSlide}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#ffff",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 384,
    height: 384,
    resizeMode: "cover",
    marginBottom: 100,
  },
  details: {
    paddingHorizontal: 34,
    marginBottom: 47,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  skip: {
    fontSize: 16,
    color: "gray",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 34,
    position: "absolute",
    bottom: 22,
  },
  next: {
    fontSize: 16,
    color: "green",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
