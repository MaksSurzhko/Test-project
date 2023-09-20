import React from 'react';
import { Cont, Title } from "../home/home.styled"
import hcss from "./home.module.css"

// const Home = () => {
//   return (
//     <Cont>
//         <Title>Craft Your Perfect <b/> Drink with Drink Master</Title>
//     </Cont>
//   );
// };

const Home = () => {
  return (

   <div className={hcss.container}>
   
   <div className={hcss.cont}>
    <div className={hcss.box}>
        <h1 className={hcss.title}>Craft Your Perfect <b /> Drink with Drink Master</h1>
        <p className={hcss.text}>Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages.
        </p>
        <button className={hcss.knopka} >Add drink</button>
        </div>
        
       <div className={hcss.boxtwo}>
          <p className={hcss.peshka}>Image</p>
        </div>
      </div>
      
      <div className={hcss.conttwo}>
        <div className={hcss.box}>
          <h2 className={hcss.titles}>Ordinary Drink</h2>
          <ul className={hcss.list}>
  <li className={hcss.item}>
    <div className={hcss.itemContent}>
      <p>name</p>
      <a href="">see more</a>
    </div>
  </li>

  <li className={hcss.item}>
    <div className={hcss.itemContent}>
      <p>name</p>
      <a href="">see more</a>
    </div>
  </li>

  <li className={hcss.item}>
    <div className={hcss.itemContent}>
      <p>name</p>
      <a href="">see more</a>
    </div>
  </li>
          </ul>
        </div> 



        <div className={hcss.box}>
          <h2 className={hcss.titles}>Cocktail</h2>
          <ul className={hcss.list}>
  <li className={hcss.item}>
    <div className={hcss.itemContent}>
      <p>name</p>
      <a href="">see more</a>
    </div>
  </li>

  <li className={hcss.item}>
    <div className={hcss.itemContent}>
      <p>name</p>
      <a href="">see more</a>
    </div>
  </li>

  <li className={hcss.item}>
    <div className={hcss.itemContent}>
      <p>name</p>
      <a href="">see more</a>
    </div>
  </li>
</ul>
</div> 

        <button className={hcss.knopkaa}>Other drinks</button>
      </div>
      
     </div>  
  );
};

export default Home;