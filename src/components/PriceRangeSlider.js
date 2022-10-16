import { View, Text } from "react-native";
import React from "react";
import RangeSlider from "rn-range-slider";
import Thumb from "./price-range-slider/Thumb";
import Rail from "./price-range-slider/Rail";
import RailSelected from "./price-range-slider/RailSelected";
import Notch from "./price-range-slider/Notch";
import Label from "./price-range-slider/Label";
import { useCallback, useState } from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const PriceRangeSlider = ({ max, min, style = {} }) => {
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        ...style,
      }}
    >
      <Text style={{ ...textStyles.Body_16, color: colorStyles.Dark100A }}>
        {low}$
      </Text>
      <RangeSlider
        min={min}
        max={max}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
        style={{ flex: 1 }}
      />
      <Text style={{ ...textStyles.Body_16, color: colorStyles.Dark100A }}>
        {high}$
      </Text>
    </View>
  );
};

export default PriceRangeSlider;
