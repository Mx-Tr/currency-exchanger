import "./App.css"
// import {currencyApi} from "./services/CurrencyService.ts";
import CurrencyExchangeContainer from "./components/CurrencyExchangeContainer.tsx";


const App = () => {

	// const {data: currencies, error, isLoading} = currencyApi.useFetchAllCurrenciesQuery('')
	

	return (
        <div className="app">
			{/*{currencies && currencies.map((currency) =>*/}
			{/*	<Test key={currency.currencyCode} currency={currency}/>*/}
			{/*)}*/}
			
			<CurrencyExchangeContainer/>
			
        </div>
    );
};

export default App;