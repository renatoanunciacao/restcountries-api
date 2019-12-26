import { createStore } from "redux";
import Reducers from "./reducers";
import storeSynchronize from "redux-localstore";

const Store = createStore(Reducers);

storeSynchronize(Store);

export default Store;