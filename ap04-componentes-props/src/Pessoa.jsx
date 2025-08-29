
const Pessoa = (props) => {
  return (
        <div className="d-flex">
      <div className="d-flex align-items-center">
        <img src={`{props.img}.png`}></img>
      </div>
      <div className="flex-grow-1 ms-2 border p-1">
        <h4 className="">{props.nickname}</h4>
        <p className="">{props.comentario}</p>
      </div>
    </div>
  )
}

export default Pessoa