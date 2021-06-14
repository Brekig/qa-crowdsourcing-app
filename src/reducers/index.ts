import { combineReducers } from "redux";
import { StoreState } from "./interface";
import auth from "./auth";
import game from "./game";
import writeQuestion from "./writeQuestion";
import verifyQuestion from "./verifyQuestion";
import selectSpan from "./selectSpan";
import notification from "./notification";
import googleSearch from "./googleSearch";
import articleReader from "./articleReader";
import authCode from "./authCode";
import chartData from "./chartData";
import pushNotification from "./pushNotification";
import prize from "./prize";
import overlay from "./overlay";
import motivation from "./motivation";

export default combineReducers<StoreState>({
	auth,
	game,
	writeQuestion,
	verifyQuestion,
	selectSpan,
	notification,
	googleSearch,
	articleReader,
	authCode,
	chartData,
	pushNotification,
	prize,
	overlay,
	motivation,
});

export * from "./interface";
