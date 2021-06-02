import { OverlayType } from "../../declerations";
import { ActionTypes } from "../types";

export interface EnqueOverlayAction {
	type: ActionTypes.enqueOverlay;
	payload: OverlayType;
}

export interface DequeOverlayAction {
	type: ActionTypes.enqueOverlay;
	payload: OverlayType;
}
