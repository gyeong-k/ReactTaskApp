import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const UseTypedDispatch = () => useDispatch<AppDispatch>();
// const logger = useSelector((state) => state.logger);
// const dispatch = useDispatch();
