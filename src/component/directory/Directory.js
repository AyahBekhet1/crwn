import CategoryItem from '../category-item/category-item'
import './Directory.scss'

export default function Directory ({categories}) {
    
      
    return (
        <div className='categories-container'>
        {
          categories.map((category)=>(
        
            <CategoryItem category={category} key={category.id}/> 
          ))
        }
          </div>
          )
        
       
}