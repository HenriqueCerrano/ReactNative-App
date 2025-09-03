import React, { ForwardedRef, forwardRef, Fragment, LegacyRef } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { style } from "./style";
import { themas } from "../../global/themas";
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInput & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
}

export const Input = forwardRef<TextInput, Props>((Props, ref: ForwardedRef<TextInput> | null) => {
    
    const { IconLeft, IconRight, IconRightName, IconLeftName, title, onIconRightPress, onIconLeftPress,
        ...rest
    } = Props

    const calculatorSizeWidht = () =>{
        if(IconLeft && IconRight)
        {
            return '80%';
        }else if (IconLeft || IconRight){
            return '90%';
        }else{
            return '100%';
        }
    }

    const calculateSizePaddingLeft = () => {
        if(IconLeft && IconRight)
        {
            return 0;
        }else if (IconLeft || IconRight){
            return 10;
        }else{
            return 20;
        }

    }
    
    return (
        <Fragment>
            <Text style={style.titleInput}>{title}</Text>
            <View style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft()}]}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray} 
                        style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[
                        style.input, {width: calculatorSizeWidht()}
                    ]}
                    {...rest}
                />
               {IconRight && IconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={IconRightName as any} size={20} color={themas.colors.gray}
                            style={style.Icon} />
                    </TouchableOpacity>

               )}
            </View>
        </ Fragment>
        
    )

})
