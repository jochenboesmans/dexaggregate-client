import io from "socket.io-client";

let socket;

const subscribeToSocketBroadcasts = (dispatch) => {
	socket = (process.env.NODE_ENV === `production`) ? io() : io(`localhost:${process.env.SERVER_PORT || 5000}`);
	socket.on(`marketBroadcast`, receivedMarket => dispatch({ type: `UPDATE`, payload: receivedMarket }));
};

const unsubscribeFromSocketBroadcasts = (dispatch) => {
	socket.removeAllListeners(`marketBroadcast`);
	dispatch({ type: `UPDATE`, payload: null });
};

export { subscribeToSocketBroadcasts, unsubscribeFromSocketBroadcasts };