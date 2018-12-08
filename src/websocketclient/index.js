import io from "socket.io-client";
import {updateMarket} from "../actions";
import {store} from "../index";

export const subscribeToSocketBroadcasts = () => {
  const socket = io(`:${process.env.PORT || 5000}`);
  socket.on("marketBroadcast", receivedMarket => {
    updateMarket(receivedMarket)(store.dispatch);
    console.log(receivedMarket);
  });
};
