const Filter = ({filter, onFilterChange}) => {
    return ( <div className="filter">
        <input type="text" value={filter} placeholder="Filter by name" onChange={(e)=> onFilterChange(e.target.value)} />
    </div> );
}
 
export default Filter;