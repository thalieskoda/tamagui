# tamagui

1. npm install -g expo-cli
2. expo init mytamagui
3. cd mytamagui
4. yarn add tamagui
5. yarn add @tamagui/config
6.create a tamagui.config.ts in the root 
    import { config } from '@tamagui/config/v2'
import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui(config)

// this makes typescript properly type everything based on the config
type Conf = typeof tamaguiConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig

7. add the TamaguiProvider in your root
    import '@tamagui/core/reset.css'

import { TamaguiProvider } from 'tamagui'

import config from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
    </TamaguiProvider>
  )
}

8. yarn add @react-navigation/native @react-navigation/stack

9. npm install @tamagui/checkbox
10. yarn add react-native-svg @tamagui/lucide-icons
11. yarn add react-native-safe-area-context
12. npm i react-native-gesture-handler
13. rapid api https://rapidapi.com/ajayakv/api/rest-countries/
14. npm install @clerk/clerk-expo
15. npx expo install expo-blur
16. npm install react-native-loading-spinner-overlay