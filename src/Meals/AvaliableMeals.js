import { useCallback,useEffect,useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvaliableMeals=()=>{
const[meals,setmeals]=useState([]);
const[isloading,setisloading]=useState(false);
  useEffect(()=>{
    const Fetchmealshandler=async()=>{
      const response=await fetch('https://react-foodorder-e53ab-default-rtdb.firebaseio.com/meals.json');
      const data=await response.json();
      const loadedmeals=[];
      for(const key in data){
        loadedmeals.push({
            id:key,
            name:data[key].name,
            description:data[key].description,
            price:data[key].price
      })
      }
      setmeals(loadedmeals);
      setisloading(true);
    }
    Fetchmealshandler();
  },[]);

   const Meallist=meals.map(meal=><MealItem 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}
    
     />);
    return(
      
<section className='meals'>
<Card>
  { !isloading && <h4 className='loading'>Loading Meals...</h4>}
<ul>{Meallist}</ul>
</Card>
</section>

    );
}
export default AvaliableMeals;