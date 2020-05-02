import React from "react";
import './error.css';

export const ErrorValidator = ({err, touch}) => {
	return <>{err && touch ? <div className="error-msg">{err}</div> : null}</>;
};

