const Client = require("../models/Client");
const controllers = {};

controllers.createClient = async(req, res, next) => {
    const client = new Client(req.body);
    try {
        await client.save();
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error });
        // next go the next middleware and not stop the applicaction
        next();
    }
};

controllers.showClients = async(req, res, next) => {
    const data = await Client.find({})
        .then((clients) => {
            return { success: true, data: clients };
        })
        .catch((err) => {
            console.log("ERROR >: " + err);
            return { success: false, message: "Error in server" };
        });
    res.json(data);
};

controllers.getOneClient = async(req, res) => {
    const _id = req.params.id;
    const data = await Client.findById(_id)
        .then((client) => {
            return { success: true, data: client };
        })
        .catch((err) => {
            console.log("ERROR >: " + err);
            return { success: false, message: "Error in server" };
        });
    res.json(data);
};

controllers.updateOneclient = async(req, res) => {
    const _idClient = req.params.id;
    const data = await Client.findOneAndUpdate({ _id: _idClient }, req.body, { new: true })
        .then((client) => {
            return { success: true, data: client };
        })
        .catch((err) => {
            console.log("ERROR >: " + err);
            return { success: false, message: "Error in server" };
        });
    res.json(data);
};


controllers.deleteOneClient = async(req, res) => {
    const _id = req.params.id;
    const data = await Client.findByIdAndDelete(_id)
        .then(() => {
            return { success: true, message: "Element was deleted" };
        })
        .catch(err => {
            console.log("Error >: " + err);
            return { success: false, message: err };
        });
    res.json(data);
}

module.exports = controllers;