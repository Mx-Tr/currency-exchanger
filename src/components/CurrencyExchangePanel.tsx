import CurrencySelector from "./CurrencySelector.tsx";
import CurrencyInput from "./CurrencyInput.tsx";

const CurrencyExchangePanel = () => {
	return (
		<div>
			<CurrencySelector/>
			
			<CurrencyInput/>
		</div>
	);
};

export default CurrencyExchangePanel;