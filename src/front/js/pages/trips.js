import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import tripsImage from "../../img/background-trips.png";
import "../../styles/trips.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import { TripCard } from "../component/trip-card.js";

export const Trips = () => {
	const { store, actions } = useContext(Context);
	const [tripsMap, setTripsMap] = useState("");
	const ARRAYAUX = [
		{ picture: store.profilePicture, name: "Ricardo" },
		{ picture: store.profilePicture, name: "Ricardo" }
	];
	useEffect(() => {
		actions.getTrips();
	}, []);

	useEffect(() => {
		if (store.trips != undefined) {
			setTripsMap(
				store.trips.map((trip, index) => {
					return (
						<TripCard
							key={index.toString()}
							idTrip={trip.id}
							user={trip.user}
							country={trip.country}
							cities={trip.cities}
							startDate={trip.startDate}
							endDate={trip.endDate}
							activities={trip.activities}
							partners={trip.partners}
						/>
					);
				})
			);
		}
		console.log(store.trips);
	}, [store.trips]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box trips-view">
				<div className="col-sm-12 col-md-5 picture-box">
					<img src={tripsImage} className="picture" />
				</div>
				<div className="col-sm-12 col-md-7 content-box">
					<h1 className="text-center mt-4">Últimos viajes propuestos</h1>
					<TripCard
						idTrip="2"
						user={ARRAYAUX[1]}
						country="Portugal"
						cities="Lisboa"
						startDate="21-02-2022"
						endDate="28-02-2022"
						activities="Quiero ir a pasear por el rio y pescar"
						partners={ARRAYAUX}
					/>
					{tripsMap}
				</div>
			</div>
			<Footer />
		</>
	);
};
