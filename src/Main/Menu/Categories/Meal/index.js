const Meal = (prop) => (
    <div className="size">
      <span>{prop.meal.size}</span>
      {prop.meal.description}
    </div>
);

export default Meal;