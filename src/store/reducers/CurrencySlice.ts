import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface CurrencyState {
	firstInputValue: string;
	secondInputValue: string;
	firstCurrencyRateToUSD: number;
	secondCurrencyRateToUSD: number;
}

const initialState: CurrencyState = {
	firstInputValue: '100',
	secondInputValue: '300',
	firstCurrencyRateToUSD: 30,
	secondCurrencyRateToUSD: 90,
}

export const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		firstInputValueChange: (state, action: PayloadAction<string>) => {
			state.secondInputValue = (+action.payload / +state.firstInputValue * +state.secondInputValue).toString();
			state.firstInputValue = action.payload;
		},
		
		secondInputValueChange: (state, action: PayloadAction<string>) => {
			state.firstInputValue = (+action.payload / +state.secondInputValue * +state.firstInputValue).toString();
			state.secondInputValue = action.payload;
		},
		
		firstCurrencyRateToUSDChange: (state, action: PayloadAction<number>) => {
			state.firstCurrencyRateToUSD = action.payload;
			state.secondInputValue = (+state.firstInputValue / (state.firstCurrencyRateToUSD / state.secondCurrencyRateToUSD)).toString()
		},
		
		secondCurrencyRateToUSDChange: (state, action: PayloadAction<number>) => {
			state.secondCurrencyRateToUSD = action.payload;
			state.firstInputValue = (+state.secondInputValue * (state.firstCurrencyRateToUSD / state.secondCurrencyRateToUSD)).toString()
		},
	}
})

export const {
	firstInputValueChange,
	secondInputValueChange,
	secondCurrencyRateToUSDChange,
	firstCurrencyRateToUSDChange
} = currencySlice.actions;

export default currencySlice.reducer;