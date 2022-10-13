import { Text, View } from "react-native";
import { textStyles, colorStyles } from "./src/utils/GlobalStyles";
export default function App() {
  return (
    <View>
      <Text
        style={[
          {
            paddingTop: 100,
            color: colorStyles.Orange,
          },
          textStyles.H1,
        ]}
      >
        {"Hello world"}
      </Text>
    </View>
  );
}
