const Star = ({star, rating, hover, color, ratingClick, hoverOver}) => {
    return ( <span 
        className="star"
        style={{ color: (star <= (hover || rating )) ? color : star.color }}
        onClick={() => ratingClick(star)}
        onMouseEnter={() => hoverOver(star)}
        onMouseLeave={() => hoverOver(0)}
        
    > {'\u2605'} </span> );
}
 
export default Star;