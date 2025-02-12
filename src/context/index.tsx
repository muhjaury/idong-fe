"use client";

import { createContext, useContext, useState } from "react";

const useValue = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return {
    loading,
    setLoading,
  };
};

export const WidgetContext = createContext({} as ReturnType<typeof useValue>);

function WidgetProvider(props: any) {
  return (
    <WidgetContext.Provider value={useValue()}>
      {props.children}
    </WidgetContext.Provider>
  );
}

export const useWidget = () => useContext(WidgetContext);

export default WidgetProvider;
