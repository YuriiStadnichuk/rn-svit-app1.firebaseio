import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { MainLayout } from "./src/MainLayout";
import { DateState } from "./src/context/date/DateState";
import { TodoState } from "./src/context/todo/TodoState";
import { ScreenState } from "./src/context/screen/ScreenState";

async function loadApplication() {
  await Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf")
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <DateState>
          <MainLayout />
        </DateState>
      </TodoState>
    </ScreenState>
  );
}
