import Categories from './Categories';
import menuData from '../../data/menuData.js';

const Menu = () => (
    <article id="menu">
      <h1>Menu</h1>
      
      <div id="menu_container">
        {menuData.map((category,index) => <Categories category={category} key={index}/>)}
        
        <div id="nonmenu">
          <div id="legend">
            <span className="spicy">Spicy</span>
            <span className="vegan">Vegetarian</span>
            <span className="glutenfree">Gluten Free</span>
          </div>
          <a href="/download/printable_menu.pdf" className="download">Download Menu</a>
        </div>
      </div>
   
    </article>
);

export default Menu;