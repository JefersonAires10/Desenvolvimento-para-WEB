const ProfessorModel = require('../models/professor.models')

let professores = [
    { id: 0, nome:"Jefferson Carvalho", curso:"SI", titulacao:"MEST" }, 
    { id: 1, nome:"Atilio Luiz", curso:"CC", titulacao: "DOUT" }, 
    { id: 2, nome:"Ricardo Reis", curso:"CC", titulacao: "DOUT" },
    { id: 3, nome:"Wladimir Tavares", curso:"SI", titulacao: "GRAD" },
    { id: 4, nome:"Viviane Menezes", curso:"CC", titulacao: "DOUT" }
]

let id = 5

class ProfessorService {
    
    static list() {
        return professores
    }
    
    static register(professor) {
        let professor = new ProfessorModel (
            id++,
            data.nome,
            data.curso,
            data.titulacao,
            data.ai
        )
        professores.push(professor)
        return professor
    }

    static retrieve(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                return professores[i]
            }
        }
        return null
    }

}

module.exports = ProfessorService