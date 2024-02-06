export const SelectProvincies = ({ cityes, showPopulationSelected }) => {

    const provincias = Object.values(cityes).map(e => e.provincia);
    const noRepe = Array.from(new Set(provincias));

    return (
        <div>
            <select onChange={showPopulationSelected}>
                {noRepe.map(e => {
                    return (
                        <>
                            <option value={e}>{e}</option>
                        </>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectProvincies
