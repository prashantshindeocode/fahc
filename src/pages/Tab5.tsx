import HouseChurch from "../images/house-church.png";
const Tab5: React.FC = () => {
  return (
    <>
      <div className="content-section3">
        <div className="cs3-container">
          <h1>Our Stories</h1>
          <img
            src={HouseChurch}
            alt="housechurch"
            className="housechurch-img"
          />

          <div className="cs3-member">
            <p>
              Some scholars prefer to use terms such as "unregistered church" to
              speak about the Protestant phenomenon, because these groups{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="content-section4">
        <div className="cs4-container">
          <h1>We Are</h1>
          <div className="cs3-member">
            <p>
              FindAHouseChurch.com is a free church directory provided by
              CENTRAL STOREHOUSE, INC., a non-profit Christian organization with
              a heart to connect the Body of Christ (CHURCH) beyond the brick
              and mortar establishmen
            </p>
          </div>
          <div className="prash3">
      <div className="btn3">
       <button type="button"><h3>Know More</h3></button>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Tab5;
