import React from 'react'
import Lontra from './Lontra'
class App extends React.Component{

  constructor(props){
    super(props)
      this.state = {
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null
      }
    }


    icones = {
      'Primavera': 'tree-large',
      'Verão': 'sun',
      'Outono': 'leaf',
      'Inverno': 'snowflake'
    }

    obterEstacao = (latitude, data) => {
      const anoAtual = data.getFullYear()

      const d1 = new Date(anoAtual, 5, 21)

      //24/09
      const d2 = new Date(anoAtual, 8, 24)

      const d3 = new Date(anoAtual, 11, 22)

      const d4 = new Date(anoAtual, 2, 21)
      const estaNoSul = latitude < 0
      if(data >= d1 && data < d2)
        return estaNoSul ? 'Inverno' : 'Verão'
      if (data >= d2 && data < d3)
        return estaNoSul ? 'Primavera' : 'Outono'
      if (data >= d3 || data < d4)
        return estaNoSul ? 'Verão' : 'Inverno'
      return estaNoSul ? 'Outono' : 'Primavera'
    }
  
    obterLocalizacao = () => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          const dataAtual = new Date()
          const estacao = this.obterEstacao(
            position.coords.latitude,
            dataAtual
          ) 
          const icone = this.icones[estacao]
          //this.state.icone = icone
          this.setState({
            icone: icone,
            estacao: estacao,
            data: dataAtual,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        },
        (err) =>{
          console.log(`Erro: ${err}`)
          this.setState({
            mensagemDeErro: `Tente Novamente mais tarde.Veja o que aconteceu ${err}`
          })
          
        }
      )
    }
    
    // componentDidMount(){
    //   this.obterLocalizacao()
    // }

  render(){
    return(
      <div className='container mt-2'>
        <div className='row'>
          <div className='col-12'>
                <div>
                  {
                  Lontra.map(() => (
                    <i class
                  )
                  )
                  }
                  <i className="fa-solid fa-otter fa-3x"></i>
                
                </div>
      </div>
      </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className="card">
              <div className="card-body" style={{height: '6rem'}}>
                <div className='d-flex border align-items-center rounded mb-2'
                style={{height:'6rem'}}>
                  <i className={`fa-solid fa-4x fa-${this.state.icone}`}></i>
                  <p className='w-75 text-center fs-1'>{this.state.estacao}</p>
                </div>
                <div>
                  {   }
                  {
                    this.state.latitude ? 
                    `coordenadas: ${this.state.latitude},${this.state.longitude}, Data: ${this.state.data.toLocaleString()}`:
                   
                    this.state.mensagemDeErro ?
                    `${this.state.mensagemDeErro}`:
                    `precisa liberar o acesso a localização`
                  }
                </div>
                <button
                className='btn btn-outline-primary w-100 mt-2' 
                onClick={this.obterLocalizacao}
                >
                  qual a minha localização
                </button>
                
            {/* em: mutiplica a fonte base por um numero, ex:4em, caso não seja definido é mutiplicado a fonte base  
            rem:  */}
          
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App