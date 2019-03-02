import React, { lazy } from "react";
// import { connect } from "react-redux";
import reduce from "lodash/reduce";

import { formatPercentage, formatPrice } from "../../../../util/formatFunctions";

const TableCell = lazy(() => import("@material-ui/core/TableCell/TableCell"));

const unconnectedMarketPairSpread = ({ p }) => {
	const innerBid = reduce(p.market_data, (max, emd) => emd.current_bid_dai > max ?  emd.current_bid_dai : max, 0);
	const innerAsk = reduce(p.market_data, (min, emd) => emd.current_ask_dai < min ? emd.current_ask_dai : min, Number.MAX_VALUE);
	const spreadRatioDifference = ((innerAsk / innerBid) - 1) || 0;
	const arbitrageLimit = -0.01;

	const style = spreadRatioDifference <= arbitrageLimit ? { color: "red" } : {};
	const spreadString = `${formatPrice(innerBid)} - ${formatPrice(innerAsk)} (${formatPercentage(spreadRatioDifference)})`;
	return (
		<TableCell
			style={style}
			align="right"
		>
			{spreadString}
		</TableCell>
	)
};

//const MarketPairSpread = connect(null, null)(unconnectedMarketPairSpread);
export default unconnectedMarketPairSpread;