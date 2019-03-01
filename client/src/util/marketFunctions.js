import find from "lodash/find";
import reduce from "lodash/reduce";

const findPair = (market, baseSymbol, quoteSymbol) => {
	return find(market, p => p.quote_symbol === quoteSymbol && p.base_symbol === baseSymbol);
};

const lowestCurrentAskAcrossExchanges = (market, baseSymbol, quoteSymbol) => {
	const p = findPair(market, baseSymbol, quoteSymbol);
	return reduce(p.market_data, (min, emd) => emd.current_ask_dai < min ? emd.current_ask_dai : min, Number.MAX_VALUE);
};

const highestCurrentBidAcrossExchanges = (market, baseSymbol, quoteSymbol) => {
	const p = findPair(market, baseSymbol, quoteSymbol);
	return reduce(p.market_data, (max, emd) => emd.current_bid_dai > max ? emd.current_bid_dai : max, 0);
};

export {
	findPair, lowestCurrentAskAcrossExchanges, highestCurrentBidAcrossExchanges,
};

