export const ButtonOrder = ({ordernarMunicipios, name}) => {

  return (
    <div className="flex justify-center">
      <button className="bg-slate-950 text-white p-2 mb-10 cursor-pointer hover:bg-green-300" 
      onClick={ordernarMunicipios}>{name}</button>
    </div>
  )
}

export default ButtonOrder;