import {TamaguiProvider, Text, View} from 'tamagui'
import {config} from "@tamagui/config/v3";

export default function App() {
  return (
      <TamaguiProvider config={config}>
        <View>
          <Text>Testing Tamagui</Text>
        </View>
      </TamaguiProvider>
  );
}
