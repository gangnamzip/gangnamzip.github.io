import location from '../../data/location.svg'

const Location = () => (
    <article id="location">
      <h1>Location</h1>
      <div id="location_container">
        <div className="street">
          <img src={location} alt="Location"/>
          202 WALTON WAY #150
          <span className="city">Cedar Park, TX 78613</span>
        </div>
        <div className="hours">
          <span>11a - 8:30p | Tuesday - Saturday</span>
          <span>CLOSED | Sunday & Monday</span>
        </div>
        <div className="reservations">
          <a href="tel:1 (512) 986-4198">Call for parties larger than 6</a>
        </div>
        <iframe loading="lazy" 
            allowFullScreen 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtjtq3VQNLDdeYxPtuGm4h6cXZ0TB5IQg&q=Gangnam+Zip&zoom=19&center=30.522195083849024,-97.83208780230962" 
            id="map"></iframe>
        <div className="image"></div>
      </div>
    </article>
);

export default Location;