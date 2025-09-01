import { StyleSheet } from "react-native";
import { themas } from "../../global/themas";

export const style = StyleSheet.create({

    boxinput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray,
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
        paddingLeft: 5,
    },

})