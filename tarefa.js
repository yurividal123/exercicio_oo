function Cachorro(raca, nome, cor) {
    this.raca = raca;
    this.nome = nome;
    this.cor = cor;
}

function Gato(raca, nome, cor, idade) {
    this.idade = idade;
    Cachorro.call(this, "Persa", "Donatello", cor);

}

function Cavalo(raca, nome, cor, altura) {
    this.altura = altura;

    Cachorro.call(this, "Campeiro", "Ferus", cor);
}



const Cachorro1 = new Cachorro("Pug", "Slupy", "preto");
const Gato1 = new Gato("Persa", "Donatello", "preto", "10 anos")
const Cavalo1 = new Cavalo("Campeiro", "Ferus", "3 metros")
console.log(Cachorro1);
console.log(Gato1);
console.log(Cavalo1);

