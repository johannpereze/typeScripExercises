class PersonaNormal {
    constructor(
      public nombre: string, 
      public direccion: string
      ) {}
  }
  
  class Heroe extends PersonaNormal{
    constructor(
      public alterEgo: String,
      public edad: number,
      public nombreReal: string
    ) {
      super(nombreReal, 'New York')
    }
  }
  
  const ironman = new Heroe("Ironman", 45, "Tony");
  
  console.log(ironman);