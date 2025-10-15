import React from 'react'
import Person3 from '../assets/person3.jpg'
import Women from '../assets/women.jpg'
import Kids from '../assets/kid.jpg'
const CategorySection = () => {
    const categories = [
        {
            tital : 'Men',
            imageUrl : Person3
        },
         {
            tital : 'Women',
            imageUrl : Women
        },
         {
            tital : 'Kids',
            imageUrl : Kids
        }
    ]
  return (
    <div className='container'>
        {
            categories.map((category, index)=>(
                <div>
                    <img src={category.imageUrl} alt="img not found" />
                    <div>
                        <p>{category.tital}</p>
                        <p>View All</p>
                    </div>
                </div>
            ))
        }
      
    </div>
  )
}

export default CategorySection
