import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Inicial } from '../screens/Inicial';
import { Home } from '../screens/Home';


export function StackRoutes() {
    return (
        <Navigator>
            <Screen name="inicial" component={Inicial} options={{ headerShown: false }} />
            <Screen name="home" component={Home} />
        </Navigator>
    );
}
