const Sorter = ({sortBy, onSortChange}) => {
    return ( <div className="controls">
        <label htmlFor="sort">Sort By:</label>
        <select value={sortBy} id="sort" onChange={(e)=>{onSortChange(e.target.value)}}>
            <option value="market_cap_desc">Market Cap (High to low)</option>
            <option value="market_cap_asc">Market Cap (Low to high)</option>
            <option value="price_desc">Price (Low to high)</option>
            <option value="price_asc">Price (High to low)</option>
            <option value="change_desc">24h change (High to low)</option>
            <option value="change_asc">24h change (Low to high)</option>
        </select>
    </div> );
}
 
export default Sorter;