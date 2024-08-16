class hero {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
    
    atacar() {
      let ataque
  
    if (this.tipo === 'Mago') {
        ataque = 'magia'
      } else if (this.tipo === 'Guerreiro') {
        ataque = 'espada'
      } else if (this.tipo === 'Monge') {
        ataque = 'artes marciais'
      } else if (this.tipo === 'Ninja') {
        ataque = 'shuriken'
      } else {
        ataque = 'ataque desconhecido' 
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
      
    }
  }
  
  const mago = new hero('Merlin', 100, 'Mago')
  mago.atacar() 
  
  const guerreiro = new hero('Bersek', 87, 'Guerreiro')
  guerreiro.atacar()
  
  const monge = new hero('Aang', 112, 'Monge')
  monge.atacar() 
  
  const ninja = new hero('Naruto', 17, 'Ninja')
  ninja.atacar() 
  