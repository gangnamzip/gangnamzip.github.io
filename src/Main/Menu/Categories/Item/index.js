const Item = (prop) => (
    <div className="item">   
      <div className="item-name"> 
        {prop.item.name}
        {prop.item.amount != null ? <span>({prop.item.amount})</span>: ''}
        {prop.item.isSpicy === true ? <span className="spicy"></span>: ''}
        {prop.item.isVegan === true ? <span className="vegan"></span>: ''}
        {prop.item.isGF === true ? <span className="glutenfree"></span>: ''}
      </div>
  
      {prop.item.price === undefined ?
        <div className="price">
          <span>{prop.item.cup}</span>
          <span>{prop.item.dup}</span>
          <span>{prop.item.zip}</span>
        </div>
        : <div className="price">{prop.item.price}</div>}
      
      <div className="description">{prop.item.description}</div>
    </div>
);

export default Item;