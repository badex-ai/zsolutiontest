import React from 'react'
import StarIcon from './starIcon'
import PlusIcon from './plusIcon'
import { v4 as uuidv4 } from 'uuid'

export const FoodItem = (props) => {

    let arr = Array(props.food.ratings).fill('fullStar');
   
    for (let i= 0; arr.length < 5;i++){
            arr.push('emptyStar')
        }
        
    
    

    let stars = arr.map(
        (star)=>{
            return <StarIcon  key= {uuidv4()} styleColor={star}></StarIcon>
        }

    )
    return (
        <li  className={'food_card'}>
            <figure >
                <img className={"food_img"} src={props.food.strMealThumb} alt={props.food.strMeal} />
            </figure>
           <div className={"food_text_area"}>
               <div className={"food_caption_cont"}>
                   <div>
                    <figcaption className={"food_caption"}>{props.food.title}</figcaption>
                    <p className={"food_caption_small"}>{props.food.strMeal}</p>
                   </div>
                   <span><p>{props.food.price.substring(1)}$</p></span>
               </div>
               <div className={"food_desc"}>
                   <p>{props.food.description}</p>
               </div>
           </div>
           <div className={"food_option_area"}>
               <div className={"food_rating"}>
               {stars}
               </div>
               
               <div className={"food_select"}>
                   <button className={"food_select_btn"}>
                       <PlusIcon ></PlusIcon>
                   </button>
               </div>
           </div>
        </li>
    )
}





// export default connect(mapStateToProps, mapDispatchToProps)(FoodItem)
export default FoodItem
