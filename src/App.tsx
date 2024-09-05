import {TamaguiProvider, Text, View} from 'tamagui'
import appConfig from "./tamagui/tamagui.config";
import {SafeAreaView} from "react-native";


export default function App() {
  return (
      <TamaguiProvider config={appConfig}>
        <SafeAreaView>
          <View backgroundColor="blue-100" width="$4" h="$10">
            <Text>Testing Tamagui</Text>
          </View>
        </SafeAreaView>

      </TamaguiProvider>
  );
}
