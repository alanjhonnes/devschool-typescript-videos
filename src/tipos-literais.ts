const a = "a"

const positivo = true

const negativo = false

type bool = true | false

const um = 1

function checkConfirmation(input: "y" | "n"): boolean {
    return input === "y"
}

const alan = {
    nome: "Alan",
    professor: true
} as const
