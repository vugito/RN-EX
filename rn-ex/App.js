import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from "./src/common/customs/CustomButton/CustomButton";
import HeartIcon from "./src/common/icons/HeartIcon/HeartIcon";

export default function App() {

    const textStyles = {
        fontSize: 20,
        backgroundColor: 'red'
    }


    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto"/>
            <CustomButton textShown={true} text="Accept" iconShown={false} textStyles={textStyles}
                          icon={<HeartIcon/>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
