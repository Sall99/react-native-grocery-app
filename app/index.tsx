import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import { Colors, slides } from "@/constants";
import { Typography } from "@/components";
import { useRouter } from "expo-router";

export default function Index() {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunchedBefore = await AsyncStorage.getItem(
          "hasLaunchedBefore"
        );

        if (hasLaunchedBefore === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem("hasLaunchedBefore", "true");
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error("Error checking first launch:", error);

        setIsFirstLaunch(true);
      }
    };

    checkFirstLaunch();
  }, []);

  useEffect(() => {
    if (isFirstLaunch === false) {
      router.replace("/signup");
    }
  }, [isFirstLaunch, router]);

  const goToNextSlide = () => {
    if (currentIndex === slides.length - 1) {
      router.push("/signup");
    } else {
      swiperRef.current?.scrollBy(1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (isFirstLaunch === null) {
    return (
      <View style={styles.container}>
        <Typography variant="bodyLarge">Loading...</Typography>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        activeDotColor={Colors.light.primaryDark}
        onIndexChanged={(index) => setCurrentIndex(index)}
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
        <TouchableOpacity onPress={() => router.push("/signup")}>
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
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 34,
    position: "absolute",
    bottom: 22,
  },
  skip: {
    fontSize: 16,
  },
  next: {
    fontSize: 16,
    color: Colors.light.primaryDark,
  },
});
