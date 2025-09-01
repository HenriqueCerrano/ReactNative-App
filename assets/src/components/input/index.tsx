import React, { forwardRef } from "react";
import { View, Text, TextInput } from 'react-native';
import { style } from "../../pages/login/styles";
import { themas } from "../../global/themas";
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>>  |
React.ComponentType<React.ComponentProps<typeof FontAwesome>>  | 
React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInput & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    OnIconLeftPress?: () => void,
    OnIconRightPress?: () => void,
}

export const Input = forwardRef(() => {
    return(
    <>
    <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
    <View style={style.boxInput}>
        <TextInput
            style={style.input}
        />
        <MaterialIcons
            name = "email"
            size={20}
            color={themas.colors.gray}
            />
    </View>
    </>
    )
})
