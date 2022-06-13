enum TipoPessoa {
    Aluno = "Aluno",
    Professor = "Professor",
}

const tipoAluno = TipoPessoa.Aluno;

const tipoProfessor = TipoPessoa.Professor;


interface PessoaDevschool {
    tipo: TipoPessoa
}

const pessoaDevschool: PessoaDevschool = {
    tipo: TipoPessoa.Aluno
}
