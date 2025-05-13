"use client";

import { createContext, useContext, useState } from "react";

const useValue = () => {
  const [listFetchAPI, setListFetchAPI] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [urlChange, setUrlChange] = useState<string>("");
  const [footerData, setFooterData] = useState<any>([]);

  return {
    footerData,
    listFetchAPI,
    loading,
    urlChange,
    setFooterData,
    setListFetchAPI,
    setLoading,
    setUrlChange,
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
