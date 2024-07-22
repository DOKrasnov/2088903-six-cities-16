import {TOffer, TOffers} from '../../types/types.ts';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.tsx';
import {TPoints} from '../../types/map.ts';
import {TCities, URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const/const.ts';

type MapProps = {
  activeCity: TCities;
  offers: TOffers;
  selectedCard: string;
  className?: 'offer' | 'cities';
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({activeCity, offers, selectedCard, className = 'cities'}: MapProps) {
  const activeOffers: TOffers = offers.filter((offer: TOffer) => offer.city.name === activeCity);
  const mapCity = activeOffers.length > 0 ? activeOffers[0].city : null;
  // передавать на карту координаты городов

  const points: TPoints = activeOffers.reduce((acc: TPoints, currentOffer: TOffer) => {
    acc.push({
      'id': currentOffer.id,
      'title': currentOffer.title,
      'lat': currentOffer.location.latitude,
      'lng': currentOffer.location.longitude,
    });
    return acc;
  }, []);

  const mapRef = useRef(null);

  const map = useMap(mapRef, mapCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedCard !== undefined && point.id === selectedCard
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedCard]);

  return (
    <section className={`${className}__map map`}
      style={{minHeight: '500px', height: '100%'}}
      ref={mapRef}
    >
    </section>);
}

export default Map;
