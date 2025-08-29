import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
import Pessoa from "./Pessoa"
const App = () => {

  // const pedidos = [
  //   {
  //   data: '21/08/2025',
  //   titulo: 'SDD',
  //   icone: "fa-hdd",
  //   descricao:'SSD Kingston'
  //   },
  //   {
  //   data: '22/08/2025',
  //   titulo: 'Concrete Maths',
  //   icone: "fa-book",
  //   descricao:'Livro do Donald Knuth'
  //   },
  //   {
  //   data: '21/08/2025',
  //   titulo: 'Headphone',
  //   icone: "fa-headphones",
  //   descricao:'Headphones Bluetooth'
  //   },
  //   {
  //   data: '21/08/2025',
  //   titulo: 'Camera',
  //   icone: "fa-camera",
  //   descricao:'Camera GoPro'
  //   }
  // ]
  const pessoas =[
    {
    imagem:'foto.png',
    nickname:'Mary.Lockman69',
    comentario:"muito texto",
    horario:"6:52:40 PM"
    },
    {
    imagem:'foto.png',
    nickname:'Brock_Reichel18',
    comentario:"bastante texto",
    horario:"8:52:40 PM"
    },
    {
    imagem:'foto.png',
    nickname:'Mary.Lockman69',
    comentario:"esse gosta de escrever",
    horario:"10:52:40 PM"
    }

  ]
  
  const componenteFeedback = (
    <Feedback
      textoOK="Aprovado"
      textoNOK="Cancelado"
      funcaoOK={() => alert("Tudo certo com o que voce escreveu")}
      funcaoNOK={() => alert("CANCELADO")}
    />
  )
  // const hipoFamily = [
    
  //     {
  //     hipo:"i class=fa-solid fa-hippo"
  //     },
  //     {
  //     hipo:"i class=fa-solid fa-hippo fa-flip-horizontal fa-2x"

  //     },
  //     {
  //     hipo:"i class=fa-solid fa-hippo fa-md"

  //     },
  //     {
  //     hipo:"i class=fa-solid fa-hippo fa-flip-horizontal fa-md"

  //     }
    // ),
    // (
    //   <i class="fa-solid fa-hippo  "></i>
    // ),
    // (
    //   <i class="fa-solid fa-hippo "></i>
    // ),
    // (
    //   <i class="fa-solid fa-hippo  fa-md"></i>
    // )
  // ]

  
  return <div>
    <div>
      {/* {
      hipoFamily.map(() =>(
        <i class ={hipoFamily.icone}></i>
      )
    )
    } */}
    </div>
    <div className="container border rounded my-2 p-3">
      <div className="row">
        {
        pessoas.map((pessoa) => (
          <div className="col-sm-12 col-lg-6 col-xxl-4">
            <Cartao cabecalho={pessoa.horario}>
            <Pessoa
            imagem={pessoa.imagem}
            nickname={pessoa.nickname}
            comentario={pessoa.comentario}
            ></Pessoa>
            <div className="mt-5"></div>
            {componenteFeedback}
            </Cartao>
          </div>

        ))
        /* {
          pedidos.map((pedido) => (

        <div className="col-sm-12 col-lg-6 col-xxl-4">

          <Cartao cabecalho={pedido.data}>
            <Pedido
              icone={pedido.icone}
              titulo={pedido.titulo}
              descricao={pedido.descricao}
              />
            <div className="mt-3"></div>
            {componenteFeedback}
          </Cartao>
          <div className="mb-3"></div>
        </div>
          ))
        } */
        
        }
        
      </div>
    </div>
  </div>
}
  


export default App