module.exports = {
    getAll: (req,res) => {
        const allHouses = req.app.get('db').get_all();
        res.status(200).json(allHouses);
    },
    addNewHouse: (req,res) => {
        const {name, address, city, state, zip} = req.body;
        const newHouse = req.app.get('db').add_house([name, address, city, state, zip]);
        res.status(200).json(newHouse)

    },
    deleteHouse: (req,res) => {
        const {id} = req.params;
        const houseIndex = req.app.get('db').delete_house(id);
        res.sendStatus(200);
    }
}