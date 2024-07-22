// import {ReactElement} from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import {AppRoute, TCities} from '../../../const/const.ts';
import {useAppDispatch} from '../../../store';
import {selectCity} from '../../../store/action.ts';

type LocationItemProps = {
  city: TCities;
  activeCity?: TCities;
  // handleClick?: () => void | ReactElement;
}

function LocationItem({
  city,
  activeCity,
  // handleClick,
}: LocationItemProps) {
  const dispatch = useAppDispatch();
  const buttonClass = cn('locations__item-link tabs__item', {
    'tabs__item--active': activeCity === city,
  });

  return (
    <li className="locations__item">
      <Link to={AppRoute.Root} onClick={() => dispatch(selectCity(city))} className={buttonClass}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationItem;
