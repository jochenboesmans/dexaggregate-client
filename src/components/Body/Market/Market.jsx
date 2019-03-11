import React, { lazy, useContext } from "react";

import Grid from "@material-ui/core/Grid/Grid";
import Table from "@material-ui/core/Table/Table";
import TextField from "@material-ui/core/TextField/TextField";

import {
	ViewportStateContext,
	MarketStateContext,
	MarketPageStateContext,
	MarketPageDispatchContext,
	SearchFilterStateContext,
	SearchFilterDispatchContext,
} from "../../../state/contexts/contexts";

const MarketBody = lazy(() => import(`./MarketBody/MarketBody`));
const MarketHead = lazy(() => import(`./MarketHead`));
const TableNavigation = lazy(() => import(`./TableNavigation`));

const Market = () => {
	const market = useContext(MarketStateContext);
	const { width: vw } = useContext(ViewportStateContext);
	const marketPage = useContext(MarketPageStateContext);
	const marketPageDispatch = useContext(MarketPageDispatchContext);
	const searchFilter = useContext(SearchFilterStateContext);
	const searchFilterDispatch = useContext(SearchFilterDispatchContext);

	if (!market || !market.market) return null;

	const ENTRIES_PER_PAGE = 10;
	const startIndex = marketPage * ENTRIES_PER_PAGE;
	const endIndex = startIndex + ENTRIES_PER_PAGE;

	const filteredMarket = searchFilter !== `` ? market.market.filter(p =>
		p.b.includes(searchFilter.toUpperCase()) || p.q.includes(searchFilter.toUpperCase())
		|| Object.keys(p.m).find(exchangeID => exchangeID.includes(searchFilter.toUpperCase()))) : market.market;
	const slicedMarket = filteredMarket.slice(startIndex, endIndex);

	const colWidths = (vw < 760) ? [`20%`, `80%`] : [`15%`, `40%`, `20%`, `25%`];
	const colGroup = (
		<colgroup>
			{colWidths.map((cw, i) => <col key={i} style={{ width: cw }}/>)}
		</colgroup>
	);

	const handleSearchChange = (e) => {
		marketPageDispatch({ type: `RESET` });
		searchFilterDispatch({ type: `SET`, payload: e.target.value });
	};

	return (
		<Grid
			container
			direction="column"
			spacing={8}
		>
			<Grid item>
				<TextField
					className="root"
					id="token-search"
					label="Search Token/Exchange"
					type="search"
					variant="outlined"
					onChange={handleSearchChange}
					value={searchFilter}
					fullWidth
				/>
			</Grid>
			<Grid item>
				<Table
					padding="dense"
					style={{ tableLayout: `fixed` }}>
					{colGroup}
					<MarketHead/>
					<MarketBody
						entriesPerPage={ENTRIES_PER_PAGE}
						filteredMarketLength={filteredMarket.length}
						slicedMarket={slicedMarket}
					/>
				</Table>
			</Grid>
			<Grid item>
				<TableNavigation
					entriesPerPage={ENTRIES_PER_PAGE}
					filteredMarketLength={filteredMarket.length}
				/>
			</Grid>
		</Grid>
	);
};

export default Market;