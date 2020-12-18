/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { createSelector } from "reselect";
import { CounterState } from "../../types/redux/state/auth";

export const getCount = (state: CounterState): number => state.value;
