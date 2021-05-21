import Aluno from '../models/Aluno';

class HomeController {
    async store(req, res) {

        const novoAluno = await Aluno.create({
            nome: 'Nani',
            sobrenome: 'Barboza',
            email: 'celoenanis2@gmail.com',
            idade: 30,
            peso: 80,
            altura: 1.65
        });

        res.status(201).json(novoAluno)
    }
}

export default new HomeController();