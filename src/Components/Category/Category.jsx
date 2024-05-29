import React from 'react'
import { CategoryFullInfos } from "./CategoeryFullInfos";
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'
function Category() {
  return (
    <section className={classes.category__container}>
      {CategoryFullInfos?.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
      ;
    </section>
  );
}

export default Category