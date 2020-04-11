import express from "express";
import {
  index,
  show,
  create,
  update
} from "../app/controllers/livesController";
import { dispatch } from "../app/controllers/Controller";
const router = express.Router();

/*
 * GET '/lives' => Return all lives
 */
router.get("/lives", dispatch(index));

/*
 * POST '/lives' => Create new live
 */
router.post("/lives", dispatch(create));

/*
 * GET '/lives/:liveId' => Return the live where id = liveId
 */
router.get("/lives/:liveId", dispatch(show));

/*
 * PATCH '/lives/:liveId' => Update live's data where id = liveId
 */
router.patch("/lives/:liveId", dispatch(update));

/*
 * DELETE '/lives/:liveId' => Delete the live where id = liveId
 * Not allowed by now.
 */

export default router;
