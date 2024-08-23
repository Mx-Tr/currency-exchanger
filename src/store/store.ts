import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {currencyApi} from "../services/CurrencyService.ts";


const rootReducer = combineReducers({
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
