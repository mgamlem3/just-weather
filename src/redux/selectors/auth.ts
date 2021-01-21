/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { State } from "../../types/redux/state";

export const selectCurrentUser = (state: State): string => state.auth.user;
