class UserDevschool {

    constructor(public id: string, public nome: string) {
    }

    getUppercaseName() {
        return this.nome.toUpperCase();
    }

}

interface TemMaterias {
    materias: string[];
}

class ProfessorDevschool extends UserDevschool implements TemMaterias {
    materias: string[];

    constructor(id: string, nome: string, materias: string[]) {
        super(id, nome)
        this.materias = materias
    }
}

const professor: ProfessorDevschool = new ProfessorDevschool("123", "Alan", ["typescript"])

function test(user: ProfessorDevschool) {
    user
}

console.log(professor)
