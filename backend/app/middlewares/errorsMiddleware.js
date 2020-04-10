/*
! Improthe message & check the status
*/

export const unauthorizedAccess = res => {
  return res
    .status(401)
    .send('Unauthorized access.')
    .end()
}

export const badCredential = res => {
  res.status(403)
    .send('Forbiden, Bad credential.')
    .end()
}

export const internalError = res => {
  return res
    .status(500)
    .send('Internal server error.')
    .end()
}
