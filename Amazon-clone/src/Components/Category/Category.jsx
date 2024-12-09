import React from 'react';
import { CategoryInfos } from './categoryFullInfos';
import CategoryCard from './CategoryCard';
import classes from './category.module.css';

function Category() {
  return (
    <section className={classes.category__container}>
      {
        CategoryInfos.map((infos) => (
          <CategoryCard data={infos} key={infos.id} /> // Ensure you provide a unique key for each item
        ))
      }
    </section>
  );
}

export default Category;
