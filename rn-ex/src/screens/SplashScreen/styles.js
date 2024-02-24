import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    container:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:"#A259FF"
    },
    topIcon: {
        position: 'absolute',
        top: '7%',
        left: '5%',
        padding:15,
        borderRadius:50,
        backgroundColor:"#CDFFB6"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    bottomContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:"#F6F5F5",
        padding: 20,
        height:'65%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    iconContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    icon:{
        padding:20,
        backgroundColor:"#fff",
        borderRadius:50
    },


    titleContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
      fontWeight:'700',
      fontSize:34,
        lineHeight:41,
        color:"#2D0C57",
        textAlign:"center"
    },

    descriptionContainer:{
        flex:1,
    },
    description:{
        fontSize:17,
        fontWeight:'400',
        lineHeight:25,
        textAlign:"center",
        color:"#9586A8"
    },


    buttonsContainer:{
        flex:1,
        justifyContent:"space-between"
    },
    orderNowButton:{
      alignItems:"center",
      justifyContent:"center",
    },
    dismissButton:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent"
    },
    dismissButtonText:{
        fontSize:15,
        fontWeight:'600',
        lineHeight:18,
        color:"#9586A8",
        textAlign:"center"
    },

    orderNowButtonText:{
        fontSize:15,
        fontWeight:'600',
        lineHeight:18,
        color:"#fff",
        textAlign:"center"
    }


    }
);

export default styles;
