import React, { Component, useState, useEffect, Fragment, useContext } from "react";
import Button from "../component/button.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TripProfileCard = props => {
	const linkToTripID = "../trips/".concat(props.tripID);
	const [partnersMap, setPartnersMap] = useState("");

	useEffect(() => {
		setPartnersMap(
			props.partners.map((partner, index) => {
				const linkToPartnerID = "./user/".concat(partner.id);
				return (
					<div className="partner-box-trip-card" key={index.toString()}>
						<Link to={linkToPartnerID}>
							<div className="partner-picture-box">
								<img src={partner.picture} className="partner-picture"></img>
							</div>
							<p className="">{partner.name}</p>
						</Link>
					</div>
				);
			})
		);
	}, []);

	return (
		<div className="my-card">
			<div className="my-card-header d-flex row p-3">
				<div className="col-12 col-md-9 my-auto">
					<h5>
						{props.country}
						{props.cities}
						{props.startDate}
						{props.endDate}
					</h5>
				</div>
			</div>
			<div className="col-12 col-md-9 my-auto">
				<div className="col-1  my-auto">Compañeros:</div>
				<div className="col-6">{partnersMap}</div>
				<div className="col-3">
					<Link to={linkToTripID}>
						<Button className="ms-auto me-3" size="s" color="secondary" text="Únete" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TripProfileCard;

TripProfileCard.propTypes = {
	userID: PropTypes.number,
	tripID: PropTypes.number,
	country: PropTypes.string,
	cities: PropTypes.string,
	startDate: PropTypes.string,
	endDate: PropTypes.string,
	partners: PropTypes.array
};
