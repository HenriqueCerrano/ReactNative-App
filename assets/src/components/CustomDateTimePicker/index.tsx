import React, { useState, useEffect } from "react";
import  DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, View, Modal } from "react-native";
import { style } from "./style";

const CustomDateTimePicker = ({type, onDateChance, show, setShow}) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if(onDateChance) {
            onDateChance(date)
        }
    }, [date, onDateChance])

const onChance = (event, selectDate) => {
    const currentDate = selectDate || date;
    setImmediate(currentDate);
    setShow(false);
}

return (
    <Modal
    transparent = {true}
    visible={show}
    onRequestClose={() => setShow(false)}
    >
        <View style={style.modalOverlay}>
            <View style={[style.container, Platform.OS == 'android' && { backgroundColor: 'transparent'}

            ]}>
                <DateTimePicker 
                  value={date}
                  mode={type}
                  display={Platform.OS === 'ios' ? 'inline' : 'default'}
                  onChange={onChance}
                />
            </View>
        </View>
    </Modal>
)
}

export default CustomDateTimePicker