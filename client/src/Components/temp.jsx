import React from 'react';
import { useLocation } from 'react-router-dom';

const Temp = () => {
    const loc = useLocation();
    return (
        <div>
              Hey this is temp component {loc.pathname}
        </div>
    )
};

export default Temp;

