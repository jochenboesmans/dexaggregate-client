import React, { useContext } from "react";

import TableCell from "@material-ui/core/TableCell/TableCell";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";

import { ViewportStateContext } from "../../../state/contexts/contexts";

const MarketHead = () => {
	const { width: vw } = useContext(ViewportStateContext);

	const columns = {
		BASE_QUOTE: {
			tooltip: `A market pair is defined by a base token and quote token. A ratio between a base token and quote token indicates how much of the quote token is needed to purchase one unit of the base token. These rates are rebased to DAI on ΣDEX for ease of interpretation. `,
			text: `Base/Quote`,
			align: `left`,
		},
		SPREAD: {
			tooltip: `The difference between the highest current bid ratio and the lowest current ask ratio across all exchanges for the given market pair. Negative values (where the lowest current ask is lower than the highest current bid) indicate potential arbitrage opportunities between exchanges. Substantial arbitrage opportunities are highlighted in red.`,
			text: `Spread [DAI]`,
			align: `right`,
		},
		LAST_PRICE: {
			tooltip: `A volume-weighted sum of all exchanges' last traded ratios for the given market pair.`,
			text: `Last Price [DAI]`,
			align: `right`,
		},
		VOLUME: {
			tooltip: `A sum of all exchanges' past 24 hour volumes for the given market pair.`,
			text: `Volume (24h) [DAI]`,
			align: `right`,
		},
	};

	const selectedColumns = (vw < 760) ? [columns.BASE_QUOTE, columns.SPREAD] :
		[columns.BASE_QUOTE, columns.SPREAD, columns.LAST_PRICE, columns.VOLUME];

	return (
		<TableHead>
			<TableRow style={{ height: `4vh` }}>
				{selectedColumns.map(column => (
					<TableCell align={column.align} key={column.text}>
						<Tooltip title={column.tooltip} placement="bottom">
							<Typography style={{fontWeight: `bold`}}>{column.text}</Typography>
						</Tooltip>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default MarketHead;