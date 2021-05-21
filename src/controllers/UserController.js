import User from '../models/User'

class UserController {
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body);
            return res.status(201).json(novoUser)
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map(err => err.message) });
        }
    }

    //Index
    async index(req, res) {
        try {
            const users = await User.findAll()
            return res.status(200).json(users)

        } catch (e) {
            return res.status(500).json(null)
        }
    }

    //Show
    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.status(200).json(user)
        } catch (e) {
            return res.status(500).json(null)
        }
    }

    //Update
    async update(req, res) {

        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado'],
                })
            }
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuario não existe'],
                })
            }

            const userNovo = await user.update(req.body)

            return res.status(200).json(userNovo)
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map(err => err.message) });
        }
    }

    //Delete

    async delete(req, res) {

        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado'],
                })
            }
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuario não existe'],
                })
            }

            await user.destroy()

            return res.status(204).json(null)
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map(err => err.message) });
        }
    }


}

export default new UserController();