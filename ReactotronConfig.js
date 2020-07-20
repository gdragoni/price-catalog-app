import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import AsyncStorage from '@react-native-community/async-storage'

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) 
  .configure()
  .use(reactotronRedux())
  .useReactNative()
  .connect()

  export default reactotron;