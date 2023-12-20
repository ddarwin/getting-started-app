const db = require('../persistence');
const gremlin = require(`@gremlin/failure-flags`);

module.exports = async (req, res) => {
    await gremlin.invokeFailureFlag({
        name: 'skippy-getitems',
        debug: true,
        labels: {
        //   method: req.method,
        //   path: req.path,
        },
      })
    const items = await db.getItems();
    res.send(items);
    // res.send({"value":"hello"});
};
