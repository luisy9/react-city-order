export const SelectProvincies = ({ cityes, showPopulationSelected }) => {

    const arrayCityes4Length = Object.values(cityes).filter((e, index) => {
        if (index < 4) {
            return e;
        }
    })

    return (
        <div>
            <select onChange={showPopulationSelected}>
                {Object.values(arrayCityes4Length).map(e => {
                    return (
                        <>
                            <option value={e.provincia}>{e.provincia}</option>
                        </>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectProvincies
