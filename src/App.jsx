
import { useState } from "react"
import { CIUTATS_CAT_20K } from "./utils/cityes"
import ButtonOrder from "./components/buttonOrder/ButtonOrder"
import SelectProvincies from "./components/selectProvincies/SelectProvincies"

export const App = () => {

  const [order, setOrder] = useState([CIUTATS_CAT_20K]);

  function ordernarMunicipios() {

    const orderAlfabetical = Object.values(CIUTATS_CAT_20K).sort((x, y) => {
      return x.municipi.localeCompare(y.municipi);
    })
    setOrder([orderAlfabetical]);
  }

  function defaultOrder() {
    setOrder([CIUTATS_CAT_20K]);
  }

  function showPopulation() {
    
  }


  return (
    <div className="p-20">
      <h1 className="text-center text-4xl pb-10">Ciudades</h1>
      <div className="flex justify-center gap-10">
        <ButtonOrder ordernarMunicipios={ordernarMunicipios} name={'Ordernar Municipios'} />
        <ButtonOrder ordernarMunicipios={defaultOrder} name={'Default'} />
        <SelectProvincies cityes={CIUTATS_CAT_20K} showPopulation={showPopulation} />
      </div>
      <div className="flex justify-center">
        <table className="">
          <thead className="border-2 border-solid border-black">
            <tr className="">
              {
                Object.keys(...order[0]).map((name, index) => {
                  return (
                    <>
                      <th className="border-2 border-solid border-black" key={index}>{name}</th>
                    </>
                  )
                })
              }
            </tr>

          </thead>

          <tbody>
            {Object.values(...order).map((city) => {
              return (
                <>
                  <>
                    <tr className="border-2 border-solid border-black">
                      <td className="px-10 border-2 border-solid border-black" >{city.municipi}</td>
                      <td className="px-10 border-2 border-solid border-black" >{city.poblacio}</td>
                      <td className="px-10 border-2 border-solid border-black" >{city.provincia}</td>
                      <td className="px-10 border-2 border-solid border-black" >{city.comarca}</td>
                    </tr>
                  </>
                </>
              )
            })}
          </tbody>

        </table>
      </div>
    </div>

  )
}
export default App;
