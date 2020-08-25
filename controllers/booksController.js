module.exports = {
  findAll: (req, res) => {
    res.send("finding all");
  },
  create: (req, res) => {
    res.json(req.body);
  },
  remove: (req, res) => {
    res.send("deleting");
  },
};
