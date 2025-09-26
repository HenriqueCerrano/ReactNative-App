import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { style } from "./style"

type Props = {
    capition: string,
    color: string,
    selected: boolean,
}

export function Flag({...rest }: Props) {
    return (
        <TouchableOpacity style={[
            style.container,
            { backgroundColor:rest?.color },
            rest?.selected && { borderWidth: 2 }
            ]}>
            <Text style={{ color: "#FFF"}}>{rest.capition}</Text>
        </TouchableOpacity>
    )
}