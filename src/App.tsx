import {TamaguiProvider} from 'tamagui'
import appConfig from "./tamagui/tamagui.config";
import {SafeAreaView} from "react-native";
import {Home} from "./screens/Home";

export default function App() {
  return (
      <TamaguiProvider config={appConfig}>
        <SafeAreaView style={{ backgroundColor: "#F1FFF3", flex: 1}}>
          <Home />
        </SafeAreaView>
      </TamaguiProvider>
  );
}
