exports.getUserContent = (req, res) => {
  res.status(200).send(`User content`)
}

exports.getModeratorContent = (req, res) => {
  res.status(200).send(`Current Moderator ID. ${req.userId}`)
}

exports.getAdminContent = (req, res) => {
  res.status(200).send(`Current Admin ID. ${req.userId}`)
}
