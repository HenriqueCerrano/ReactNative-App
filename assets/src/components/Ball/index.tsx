import React from "react";
import { View } from "react-native";
import { style } from "../Ball/style"

type Props = {
    color: string
}

export function Ball({...rest}: Props) {
    return (
        <View style={[style.ball, {borderColor: rest.color || 'gray'}]}/>
    )
}