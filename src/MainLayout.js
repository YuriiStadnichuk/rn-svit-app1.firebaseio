import React, { useContext } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import { Navbar } from "./components/Navbar";
import { TimePicker } from "./components/TimePicker";
import { THEME } from "./theme";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";
import { DateContext } from "./context/date/dateContext";

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);
  const dateContext = useContext(DateContext); //обычный обьект который експортируем из самого DateState т.е. DateContext.Provider value={{ dates: state.dates }}
  // console.log(dateContext.dates.title);

  return (
    <View style={styles.wrapper}>
      <Navbar title="Open Svit TV" />
      <TimePicker
        // myTime={dateContext.dates.toLocaleTimeString()}
        // myYear={dateContext.dates.toLocaleDateString()}
        myTime={dateContext.dates[0].title}
        myYear={dateContext.dates[0].id}
      />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>

      {/* <View style={styles.block}>
        <Text>
          Це демо-версія додатку. Зареєструйтесь та отримайте доступ до +100
          телеканалів, налаштування плейлистів.
        </Text>

        <Text>Реєстрація БЕЗКОШТОВНА!</Text>

        <Text>https://rn-svit-app1.firebaseio.com/</Text>
        
        <Button title="Зареєструватись / Увійти" color="#2196F3" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 10,
  },

  block: {
    color: "#000",
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: "center",
    
  },
  wrapper: {
    flex: 1,
  }
});
