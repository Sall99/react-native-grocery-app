import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-swiper";
import { Colors, slides } from "@/constants";
import { Typography } from "@/components";

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
        activeDotColor={Colors.light.primaryDark}
      >
        {slides.map((slide) => (
          <View style={styles.slide} key={slide.key}>
            <Image source={slide.image} style={styles.image} />
            <View style={styles.details}>
              <Typography variant="titleLarge" align="center">
                {slide.title}
              </Typography>
              <Typography
                variant="bodyLarge"
                color={Colors.light.textSecondary}
                align="center"
              >
                {slide.description}
              </Typography>
            </View>
          </View>
        ))}
      </Swiper>

      <View style={styles.navigation}>
        <TouchableOpacity>
          <Typography
            variant="bodyMedium"
            color={Colors.light.textSecondary}
            style={styles.skip}
            align="center"
          >
            Skip
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextSlide}>
          <Typography variant="bodyMedium" align="center" style={styles.next}>
            Next
          </Typography>
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
    backgroundColor: Colors.light.background,
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
    gap: 12,
  },
  skip: {
    fontSize: 16,
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
    color: Colors.light.primaryDark,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
