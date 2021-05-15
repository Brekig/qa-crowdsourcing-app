import * as Auth from "./auth";
import * as Game from "./game";
import * as WriteQuestion from "./writeQuestion";
import * as VerifyQuestion from "./verifyQuestion";
import * as SelectSpan from "./SelectSpan";

export interface StoreState {
	auth: Auth.State;
	game: Game.State;
	writeQuestion: WriteQuestion.State;
	verifyQuestion: VerifyQuestion.State;
	selectSpan: SelectSpan.State;
}
