





import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import './App.css';
import FoodItem from './component/FoodItem';


export const App = (props) => {

  const [recipes, setRecipes] = useState([])


  useEffect(() => {
    axios.get("https://asm-dev-api.herokuapp.com/api/v1/food").then(
            (response)=>{
             
              setRecipes(response.data.data.meals)
              
            }
        )
   
    
  }, [])

  let loader= 
  <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 80 80"
          xmlSpace="preserve"
        >
          <circle cx="6" cy="50" r="6" fill="#272A31">
            <animate
              attributeName="opacity"
              begin="0.1"
              dur="1s"
              repeatCount="indefinite"
              values="0;1;0"
            ></animate>
          </circle>
          <circle cx="26" cy="50" r="6" fill="#272A31">
            <animate
              attributeName="opacity"
              begin="0.2"
              dur="1s"
              repeatCount="indefinite"
              values="0;1;0"
            ></animate>
          </circle>
          <circle cx="46" cy="50" r="6" fill="#4c8077">
            <animate
              attributeName="opacity"
              begin="0.3"
              dur="1s"
              repeatCount="indefinite"
              values="0;1;0"
            ></animate>
          </circle>
        </svg>


    let foodItem =  recipes.map((foodItem)=>{
      return <FoodItem key={foodItem.id} food={foodItem}></FoodItem> 
    })
  
  let content = recipes.length === 0 ? <div className={"loader"}>{loader}</div>: <div>
    <ul className={"foodList"}>
    {foodItem}
    </ul>
    <div className={"main_sub"} >
    <button className={"cta"}>Learn More</button>
    </div>
  </div>


  return (
    
      <main className={"main"}> 
      {content}
    </main>
    
  )
}


export default App
