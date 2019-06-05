import React from "react";

const ProximitySlider = () => (
    <div className="my-1">
        <input type="range" min="1" max="20" className="custom-range" id="customRange1"/>
        <datalist id="dl">
        	<option value="1" label="1 mi"></option>
        	<option value="5"></option>
        	<option value="10"></option>
        	<option value="20"></option>
        </datalist>
    </div>
);

export default ProximitySlider;