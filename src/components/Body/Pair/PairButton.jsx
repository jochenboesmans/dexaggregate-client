import React, { useState, lazy } from "react";
import { connect } from "react-redux";

import * as actions from "../../../actions";

import { pages } from "../../../model/pages";

const Button = lazy(() => import("@material-ui/core/Button/Button"));
const Grid = lazy(() => import("@material-ui/core/Grid/Grid"));

const unconnectedPairButton = ({ p, setPage }) => {
	const [hover, setHover] = useState(false);
	const innerText = hover ? `Back` : `${p.b}/${p.q}`;
	return (
		<Grid
			item
			onMouseLeave={() => { setHover(false) }}
			onMouseEnter={() => { setHover(true) }}
		>
			<Button
				fullWidth
				onClick={() => { setPage(pages.MARKET) }}
				style={{ fontSize: 24, fontWeight: "bold" }}
			>
			{innerText}
			</Button>
		</Grid>
	)
};

const PairButton = connect(null, actions)(unconnectedPairButton);
export default PairButton;