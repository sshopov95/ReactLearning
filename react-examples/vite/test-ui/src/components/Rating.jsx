import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({description = "Rate your experience", color = 'gold', feedbackMessages = ['Terible', 'Poor','Fair','Good','Excelent']}) => { //Destructuring - Иначе се използва props тук и в h2 се ползва props.description
    /*//1 inline 
    return ( <div style={{
        textAlign: 'center',
        fontFamily:'Arial',
        padding:'20px'
    }}>
                <h2>
                    Rate something
                </h2>
        </div> );*/

    /*//2 constant
    return ( <div style={styles.container}>
            <h2 style={styles.heading}>
                Rate something
            </h2>
    </div> );
    */

    /*//3 events
    const stars = Array.from({length: 5}, (_,i) => i+1);
    const clicked = (index) => console.log('Clicked', index)
    const hovered = (direction, index) => console.log('Hovered', direction, index)
    return ( <div className="rating-container">
                <h2>Rate something</h2>
                <div className="stars">
                    { stars.map((star, index)=> ( 
                        <span 
                        onClick={() => clicked(index)} 
                        onMouseEnter={() => hovered('enter', index)}
                        onMouseLeave={() => hovered('leave', index)}
                        key={star} 
                        className="star">{'\u2605'}</span>
                        ))}
                </div>
        </div> );*/

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const stars = Array.from({length: 5}, (_,i) => i+1);
    //const feedbackMessages = ['Terible', 'Poor','Fair','Good','Excelent']

    const handleSubmit = () => {
       if (rating > 0 )
        {
            setSubmitted(true);
        } 
    };

    const closeModal = () => {
        setSubmitted(false);
        setHover(0);
        setRating(0);
    }
    return ( <div className="rating-container">
                <h2>{description}</h2>
                <div className="stars">
                    { stars.map((star, index)=> ( 
                    
                    
                    /* //Using span
                       <span 
                       onClick={() => setRating(star)}
                       onMouseEnter={() => setHover(star)} 
                       onMouseLeave={() => setHover(0)} 
                       key={star} 
                       //className={`star${star<=(hover || rating)?'active':''}`}
                       className='star'
                       style={{ color: (star <= (hover || rating )) ? color : star.color }}
                      >{'\u2605'}</span>*/
                    
                    //Using custom component containing span
                     <Star key = {star} 
                     star = {star} 
                     rating = {rating} 
                     hover = {hover} 
                     color={color} 
                     ratingClick ={setRating}
                     hoverOver = {setHover}
                     hoverOut = {setHover}/>   //Подаваме стейтовете към child-a
                        ))}
                </div>
                {rating > 0 && <p className="feedback"> 
                    {feedbackMessages[rating-1]} </p>}
             
             {
             //Replaced by Button component
             //  <button className="submit-btn" onClick={handleSubmit} disabled={rating===0}> Submit </button>
             }
                <Button className="submit-btn" disabled={rating===0} onClick={() => handleSubmit()} >Submit</Button>
             {
                submitted && <Modal isOpen={submitted} onClose={closeModal} rating={rating}/>
                /* Replaced by component - Modal
                submitted && ( 
                <div className="modal-overlay"> 
                <div className="modal"> 
                    <p>You rated us {rating} star{rating > 1? 's':''}</p> 
                    <button className="close-btn" onClick={() => closeModal()}>Close</button>
                    </div>
                    </div>)
                    */
             }
            </div> );
}
/*//2 
    const styles = { container:{ 
    textAlign: 'center',
        fontFamily:'Arial',
        padding:'20px'},
    heading:{color: 'red'}};*/

export default Rating; //Default за да не се изпозлват "" при импорта