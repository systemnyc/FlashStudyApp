import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";

type Props = {
  front: string;
  back: string;
};

export default function FlipCard({ front, back }: Props) {
  const rotation = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
    rotation.value = withTiming(flipped ? 0 : 180, { duration: 350 });
  };

  const frontStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(rotation.value, [0, 180], [0, 180]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity: rotation.value < 90 ? 1 : 0,
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(rotation.value, [0, 180], [180, 360]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity: rotation.value > 90 ? 1 : 0,
    };
  });

  return (
    <TouchableWithoutFeedback onPress={flip}>
      <View style={styles.container}>
        <Animated.View style={[styles.card, styles.front, frontStyle]}>
          <Text style={styles.text}>{front}</Text>
        </Animated.View>

        <Animated.View style={[styles.card, styles.back, backStyle]}>
          <Text style={styles.text}>{back}</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 260,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    width: "90%",
    height: "100%",
    borderRadius: 18,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",

    // Modern shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    backfaceVisibility: "hidden",
  },
  front: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  back: {
    backgroundColor: "#f7faff",
    borderWidth: 1,
    borderColor: "#d0e2ff",
  },
  text: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
});
