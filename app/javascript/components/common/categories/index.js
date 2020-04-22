import React, { useState, useEffect } from 'react';
import CategoriesService from '../../../services/categories';
import { Columns, Image, Section } from 'react-bulma-components';
import styled from 'styled-components';

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
 
  async function fetchCategories() {
   const response = await CategoriesService.index();
   setCategories(response.data['categories']);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <DivVSpaced>
       <Columns className='is-mobile'>
        {categories.map((category, key) => (
          <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
            <Image src={category.image_url} onClick={() => props.fetchCategorySearch(category.id)}></Image>
          </Columns.Column>
        ))}
       </Columns>
     </DivVSpaced>
    </>
  );
}
