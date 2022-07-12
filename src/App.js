import React from "react"

export default class App extends React.Component{
 
  state = {
    nome: "Leonardo",
    idade: 26,
    comida: "Strognoff",
    musica: ["Whatever it takes", "never give up", "wall of fame"]
  }


 render(){ 
    return(
      <div>
      <h1>Olá você o meu é {this.state.nome}</h1>
      <h2>Minha idade é {this.state.idade}</h2>
      <h3>Minha comida favorita é {this.state.comida}</h3>
      <ul>
           <li>Minha musicas favoritas são {this.state.musica[0]},</li>
           <li>{this.state.musica[1]},</li> 
           <li>{this.state.musica[2]}</li>
      </ul>
      </div>
    )
  }
}