import {SixCitiesModel} from '../../../const/const.ts';

type CitiesNoPlacesProps = {
  city: SixCitiesModel;
};

function CitiesNoPlaces({city}: CitiesNoPlacesProps) {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment
          in&nbsp;
        {city}
        </p>
      </div>
    </section>
  );
}

export default CitiesNoPlaces;
