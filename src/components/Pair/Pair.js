import React, {Component} from "react";
import {connect} from 'react-redux';

import {pages} from "../../model/pages";

import {
	formatVolume,
	formatPrice
} from "../../util/formatFunctions";

import * as actions from "../../actions";

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/styles';


import _ from "lodash";

import {rebaseRate} from "../../util/marketFunctions";

import Grid from "@material-ui/core/Grid/Grid";

const styles = {
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
};

class Pair extends Component {
	render() {
		const pair = this.props.activePage.pair;
		const market = this.props.market.market;
		const p = _.find(market, pairInMarket => pairInMarket.base_symbol === pair.base_symbol && pairInMarket.quote_symbol === pair.quote_symbol);
		const sortedMarketData = _.orderBy(p.market_data, [emd => emd.volume], "desc");
		return (
			<div>
				<Grid
					container
					direction="column"
					justify="center"
					spacing={8}
					alignItems="center"
				>
					<Grid item>
						<Button className="root" onClick={() => {this.props.setPage(pages.MAIN)}}>
							Back to {pages.MAIN.name}
						</Button>
					</Grid>
					<Grid item>
						<Typography variant="h4" align="center">
							{`${p.base_symbol}/${p.quote_symbol}`}
						</Typography>
					</Grid>
					<Grid item>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell style={{color: "black"}}>Exchange</TableCell>
									<TableCell style={{color: "black"}} numeric>Current Spread of {p.quote_symbol} [DAI]</TableCell>
									<TableCell style={{color: "black"}} numeric>Last Price of {p.quote_symbol} [DAI]</TableCell>
									<TableCell style={{color: "black"}} numeric>Volume (24h) [DAI]</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{_.map(sortedMarketData,
									emd => {
										const innerBid = formatPrice(rebaseRate(market, p.base_symbol, p.quote_symbol, "DAI", emd.current_bid));
										const innerAsk = formatPrice(rebaseRate(market, p.base_symbol, p.quote_symbol, "DAI", emd.current_ask));
										const last = formatPrice(rebaseRate(market, p.base_symbol, p.quote_symbol, "DAI", emd.last_traded));
										const combVol = formatVolume(rebaseRate(market, p.base_symbol, p.quote_symbol, "DAI", emd.volume));

										return (
											<TableRow hover onClick={() => this.handleClick(emd.exchange, p)} key={emd.exchange.ID}>
												<TableCell>{emd.exchange.name}</TableCell>
												<TableCell numeric>{`${innerBid} - ${innerAsk}`}</TableCell>
												<TableCell numeric>{`${last}`}</TableCell>
												<TableCell numeric>{`${combVol}`}</TableCell>
											</TableRow>
										);
									}
								)}
							</TableBody>
						</Table>
					</Grid>
				</Grid>
			</div>
		);
	}
	handleClick = (exchange, p) => {
		let url;
		switch(exchange.ID) {
			case "KYBER":
				url = `https://kyber.network/swap/${p.base_symbol}_${p.quote_symbol}`;
				break;
			case "BANCOR":
				url = "https://www.bancor.network/tokens";
				break;
			case "OASIS":
				url = "https://oasis.direct/";
				break;
			case "PARADEX":
				url = `https://paradex.io/market/${p.base_symbol}-${p.quote_symbol}`;
				break;
			case "DDEX":
				url = `https://ddex.io/trade/${p.base_symbol}-${p.quote_symbol}`;
				break;
			case "IDEX":
				url = `https://idex.market/${p.base_symbol}/${p.quote_symbol}`;
				break;
			default:
				break;
		}
		window.open(url, "_blank");
	}
}

function mapStateToProps({market, activePage}) {
	return {market, activePage};
}

export default connect(mapStateToProps, actions)(withStyles(styles)(Pair));