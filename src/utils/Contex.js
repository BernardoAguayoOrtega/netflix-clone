//import react
import React, { createContext } from 'react';
//create context and export it
export const Context = createContext();

//create and export provider
export const ContextProvider = ({ children }) => {
	return (
		<>
			<Context.Provider>{children}</Context.Provider>
		</>
	);
};
