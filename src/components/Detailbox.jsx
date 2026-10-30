import "./Detailbox.scss"

const Detailbox = ({ icone,titile}) => {
  return (
    <div  className='smallbox'>
      <h1>
        {icone}
        </h1>  
       <h2>{titile}</h2>
    </div>
  )
}

export default Detailbox
