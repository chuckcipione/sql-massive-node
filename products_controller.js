module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, imageurl } = req.body;

        dbInstance.create_product([name, description, price, imageurl])
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.read_product([params.id])
        .then(product => res.status(200).send(product))
        .catch(() => res.status(500).send());
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send());
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([params.id, query.desc])
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send());
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_product([params.id])
        .then(response => res.status(200).send(response))
        .catch(() => res.status(500).send());
    }
};