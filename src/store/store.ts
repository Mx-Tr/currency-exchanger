import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {currencyApi} from "../services/CurrencyService.ts";
import currencyReducer from "./reducers/CurrencySlice.ts";


const rootReducer = combineReducers({
	currencyReducer,
	[currencyApi.reducerPath]: currencyApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(currencyApi.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
