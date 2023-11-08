import React from "react";

const LanguageContext = React.createContext(null);

export const LanguageProvider = (props) => {
  return (
    <LanguageContext.Provider value={props.t}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
