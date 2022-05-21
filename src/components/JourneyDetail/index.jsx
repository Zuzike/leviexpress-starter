import React from 'react';
import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stop) => {
          return (
            <BusStop
              name={stop.name}
              station={stop.station}
              time={stop.time}
              key={stop.code}
            />
          );
        })}
      </div>
    </div>
  );
};

/*<BusStop name='Praha' station='UAN Florenc' time='15:55' /> */
