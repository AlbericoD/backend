// index, show, store, update, destroy
// index   = Listagens.
// show    = Listagem única.
// store   = Criar.
// update  = Alterar.
// destroy = Remover/Deletar.

const User = require('../models/User');

module.exports = {
    async store(req, res) {

        const {email} = req.body;

        let user = await User.findOne({email});

        if(!user) {
            user = await User.create({email});
        }

        return res.json(user);
    }
};