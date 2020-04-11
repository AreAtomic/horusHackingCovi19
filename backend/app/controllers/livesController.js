import liveModel from "../models/live";
import { authMiddleware } from "../middlewares/authentificationMiddleware";
import { internalError } from "../middlewares/errorsMiddleware";
import { sendJson } from "../middlewares/successMiddleware";

create.before = [authMiddleware];
export function create(req, res, next) {
  liveModel
    .create({ ...req.body })
    .then(live => {
      sendJson(res, live);
    })
    .catch(() => internalError(res));
}

export async function index(req, res, next) {
  let lives = await liveModel.find();
  sendJson(res, { lives: lives });
}

export async function show(req, res, next) {
  liveModel.findById(req.params.liveId, function(err, live) {
    if (err) internalError(res);
    res.json({ status: "success", data: { live: live } });
  });
}

update.before = [authMiddleware];
export async function update(req, res, next) {
  liveModel
    .findByIdAndUpdate(
      req.params.liveId,
      { ...req.body },
      { new: true, runValidators: false }
    )
    .then(live => {
      sendJson(res, live);
    })
    .catch(err => internalError(res));
}

destroy.before = [authMiddleware];
export async function destroy(req, res, next) {
  liveModel.findByIdAndRemove(req.params.liveId, function(err, live) {
    if (err) internalError(res);
    res.json({
      status: "success"
    });
  });
}
