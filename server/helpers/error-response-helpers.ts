/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { Response } from "express";

export function send500(res: Response): void {
	res.status(500).send("Internal server error");
}
