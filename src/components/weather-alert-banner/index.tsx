/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import { Alert, Modal } from "react-bootstrap";
import { BsExclamationTriangle } from "react-icons/bs";

import styles from "./styles.scss";
import { selectWeatherAlerts } from "../../redux/selectors/weather";
import { WeatherAlert } from "../../types/redux/state/weather";

const WeatherAlertBanner = (): JSX.Element => {
	const [modalIsOpen, setModalOpen] = useState(false);
	const alerts: WeatherAlert[] | undefined = useSelector(selectWeatherAlerts);

	if (alerts) {
		return (
			<React.Fragment>
				{alerts.map((alert, index) => {
					return (
						<Alert
							variant='danger'
							className={styles.weatherAlert}
							key={index}
						>
							<BsExclamationTriangle className={styles.icon} />
							{alert.event}
							<Alert.Link
								onClick={() => setModalOpen(true)}
								style={{ marginLeft: 6, fontWeight: 700 }}
							>
								see details
							</Alert.Link>
							<Modal
								show={modalIsOpen}
								onHide={() => setModalOpen(false)}
							>
								<Modal.Header closeButton>
									{alert.event}
								</Modal.Header>
								<Modal.Body>
									<p style={{ fontWeight: 700 }}>
										{alert.sender_name}
									</p>
									<p>
										starts:{" "}
										{moment
											.unix(alert.start)
											.format(
												"dddd, MMMM Do YYYY, h:mm a",
											)}
									</p>
									<p>
										ends:{" "}
										{moment
											.unix(alert.end)
											.format(
												"dddd, MMMM Do YYYY, h:mm a",
											)}
									</p>
									<p style={{ whiteSpace: "break-spaces" }}>
										{alert.description}
									</p>
								</Modal.Body>
							</Modal>
						</Alert>
					);
				})}
				;
			</React.Fragment>
		);
	} else return <div key={0} />;
};

export default WeatherAlertBanner;
