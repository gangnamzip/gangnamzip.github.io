import Item from './Item';
import Meal from './Meal';

const Categories = (prop) => (
    <div id={prop.category.category}>
      <h2><span>{prop.category.korean}</span>{prop.category.category}</h2>
    
      {prop.category.items !== undefined ? prop.category.items.map((item, index) => <Item item={item} key={index}/>) :
        prop.category.meal !== undefined ? (
          <div>
            <h3 className="meal step">Select a meal</h3>
            {prop.category.meal.map(meal => <Meal meal={meal} />)}
            <h3 className="meal-protein step">Pick A Protein</h3>                                                         
            <div className="price">                                                         
              <span>Cup</span>
              <span>Dup</span>
              <span>Zip</span>
            </div>
            {prop.category.protein.map(protein => <Item item={protein} />)}
            {prop.category.additional.map(add => (
              <div className="additional">
                <span>Add more {add.name}</span>
                <span>+{add.price}</span>
              </div>
             ))}
          </div>): 
        prop.category.plate !== undefined ? 
          <div className="plate">
            <div className="description">{prop.category.plate}</div>
          
            <div className="plate-container">
              <div className="protein">
                <h3 className="plate-protein step">Pick A Protein</h3>
                <div className="protein-container">
                  <div className="meat">
                    <h4>meat</h4>
                    {prop.category.protein.meat.map(protein => <Item item={protein} />)}
                  </div>
                  <div className="seafood">
                    <h4>seafood</h4>
                    {prop.category.protein.seafood.map(protein => <Item item={protein} />)}
                  </div>
                  <div className="veg">
                    <h4>vegetarian</h4>
                    {prop.category.protein.vegetarian.map(protein => <Item item={protein} />)}
                  </div>
                </div>
              </div>
              
              <div className="dressing">
                <h3 className="plate-dressing step">Choose a dressing</h3>
                <ul>
                  {prop.category.dressing.map(dressing => <li>{dressing}</li>)}
                </ul>
              </div>
            </div>
          </div>
        : prop.category.beverages !== undefined ? 
          <div className="drinks">
            {prop.category.beverages.map(drink => 
              <div className="item"> 
                <div className="item-name">{drink.name}</div>
                <div className="price">{drink.price}</div>
                <div className="description">
                  {drink.description.map(flavor => <div className="flavor">{flavor}</div>)}
                </div>
              </div>
          )}
          
            <div id="addon">
              <h3>add-ons</h3>
              {prop.category.addons.map(drink => <Item item={drink} />)}
            </div>
          </div>
        : ''}
  
       {prop.category.bomb !== undefined ? (<div className="item">   
          <div className="item-name">Add a bomb</div>
          <div className="price">1</div>
          <div className="description">{prop.category.bomb.map(bomb => <span>{bomb.name},</span>)}</div>
        </div>) : ''}
    
    </div>
);

export default Categories;