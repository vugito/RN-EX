import {NavigationContainer} from "@react-navigation/native"
import BaseStackNavigation from "./src/navigation/BaseStackNavigation";
import {AuthProvider} from "./src/context/AuthContext";
import {CommonProvider} from "./src/context/CommonContext";

export default function App() {
    return (
        <AuthProvider>
            <CommonProvider>
                <NavigationContainer>
                    <BaseStackNavigation/>
                </NavigationContainer>
            </CommonProvider>
        </AuthProvider>
    );
}
