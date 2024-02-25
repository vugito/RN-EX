import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        // position: "absolute",
        width: "100%",
        height: 96,
        backgroundColor: "#F6F5F5",
    },
    btnStyle: {
        position: "absolute",
        top: 62,
        left: 21,
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingVertical: 16
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        lineHeight: 22,
        color: "#2D0C57"
    }
});

export default styles;
