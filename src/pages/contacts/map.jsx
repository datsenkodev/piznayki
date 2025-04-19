'use client';

import { useState, useEffect, useRef } from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';

export default function Map({ markerKey }) {
  return (
    <section className='map'>
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        version='beta'
        libraries={['marker']}>
        <MyMap markerKey={markerKey} />
      </Wrapper>
    </section>
  );
}

function MyMap({ markerKey }) {
  const [map, setMap] = useState(null);
  const ref = useRef();

  const mapOptions = {
    mapId: process.env.NEXT_PUBLIC_MAP_ID,
    center: markersArray.find((marker) => marker.key === markerKey)?.coordinates || {
      lat: 50.583848,
      lng: 30.474535,
    },
    zoom: 18,
  };

  useEffect(() => {
    const mapInstance = new window.google.maps.Map(ref.current, mapOptions);
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map && markerKey) {
      const newCenter = markersArray.find((marker) => marker.key === markerKey)?.coordinates;
      if (newCenter) {
        map.panTo(newCenter);
      }
    }
  }, [map, markerKey]);

  return (
    <>
      <div ref={ref} id='map' style={{ position: 'absolute' }} />
      {Markers && <Markers map={map} />}
    </>
  );
}

const markersArray = [
  {
    key: '1',
    coordinates: {
      lat: 50.583848,
      lng: 30.474535,
    },
  },
  {
    key: '2',
    coordinates: {
      lat: 50.58177980001313,
      lng: 30.483049682555844,
    },
  },
  {
    key: '3',
    coordinates: {
      lat: 50.58086491651105,
      lng: 30.490707567044723,
    },
  },
  {
    key: '4',
    coordinates: {
      lat: 50.58177980001313,
      lng: 30.483049682555844,
    },
  },
  {
    key: '5',
    coordinates: {
      lat: 50.581024012433616,
      lng: 30.48932290892126,
    },
  },
  {
    key: '6',
    coordinates: {
      lat: 50.58086491651105,
      lng: 30.490707567044723,
    },
  },
  {
    key: '7',
    coordinates: {
      lat: 50.58291163246434,
      lng: 30.48712822665436,
    },
  },
  {
    key: '8',
    coordinates: {
      lat: 50.582112768494895,
      lng: 30.489649756091083,
    },
  },
];

function Markers({ map }) {
  const [data, setData] = useState(markersArray);

  useEffect(() => {
    if (!map) return;

    data.forEach((marker) => {
      const markerInstance = new google.maps.Marker({
        position: marker.coordinates,
        map: map,
      });
    });
  }, [map, data]);

  return null;
}
