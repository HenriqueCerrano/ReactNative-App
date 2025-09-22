import React from "react";
import { Text, View } from "react-native";
import {style} from "./styles"
import { Input } from "../../components/input";
import {MaterialIcons} from '@expo/vector-icons';
import { FlatList } from "react-native";

type PropCard = {
    item: number,
    title: string,
    description: string,
    flag: 'urgente' | 'opicional'
}

const data: Array <PropCard> = [
    {
        item: 0,
        title: 'Realizar lição de casa',
        description: 'página 18 ao 28',
        flag: 'urgente'
    },

    {
        item: 1,
        title: 'Passear com o cachorro',
        description: 'página 18 ao 28',
        flag: 'urgente'
    },

    {
        item: 2,
        title: 'Sair para tomar um sorvete',
        description: 'página 18 ao 28',
        flag: 'urgente'
    }

]

export default function List() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia, 
                <Text style={{ fontWeight: 'bold'}}> Leo </Text></Text>
                <View style={style.boxInput}>
                    <Input 
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList 
                    data={data}
                    style={{ marginTop: 40, paddingHorizontal: 30 }}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({ item, index }) => { return (<Text>{item.item}</Text>) }}
                />
            </View>
        </View>
    )
}