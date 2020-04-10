/*
! Document here
*/
export const sendJson = (res, data) => {
  return res
    .status(200)
    .json(data)
    .end()
}
