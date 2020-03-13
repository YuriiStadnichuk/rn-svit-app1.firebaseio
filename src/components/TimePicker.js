import React, { useState, useContext } from "react";
import { View, Button, Platform, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { THEME } from "../theme";



export const TimePicker = ({ myTime, myYear }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
 

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <Text style={styles.textTime} onPress={showTimepicker} >
       
        {myTime}
      </Text>

      <Text style={styles.textDate} onPress={showDatepicker}>
 
        {myYear}
      </Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textTime: {
    color: "#191825",
    fontSize: 50,
    fontFamily: "poppins-regular",
    backgroundColor: THEME.MAIN_COLOR,
    height: 90,
    paddingLeft: 16
  },
  textDate: {
    color: "#191825",
    fontSize: 20,
    fontFamily: "poppins-regular",
    backgroundColor: THEME.MAIN_COLOR,
    height: 30,
    paddingLeft: 20
  },
  picker: {
    color: THEME.MAIN_COLOR
  }
});
