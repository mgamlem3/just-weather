/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { Link } from "react-router-dom";

import Page from "../page";
import { Routes } from "../../routes";

import styles from "./styles.scss";

const TermsContent: React.FunctionComponent = () => {
	return (
		<Page>
			<main className={styles.terms}>
				<h1>Terms and Conditions for Just Weather</h1>
				<h2>Introduction</h2>
				<div>
					These Website Standard Terms and Conditions written on this
					webpage shall manage your use of our website, Just Weather
					accessible at{" "}
					<Link to={Routes.Home} className={styles.link}>
						justweather.mgamlem3.com
					</Link>
					. These terms will be applied fully and affect to your use
					of this website. By using this website, you agreed to accept
					all terms and conditions written in here. You must not use
					this website if you disagree with any of these website
					standard Terms and Conditions. Minors or people below 18
					years old are not allowed to use this Website.
				</div>
				<h2>Intellectual Property Rights</h2>
				<div>
					Other than the content you own, under these Terms, Just
					Weather and/or its licensors own all the intellectual
					property rights and materials contained in this Website. You
					are granted limited license only for purposes of viewing the
					material contained on this Website.
				</div>
				<h2>Restrictions</h2>
				<div>
					You are specifically restricted from all of the following:
					<ul>
						<li>
							publishing any website material in any other media;
						</li>
						<li>
							selling, sublicensing and/or otherwise
							commercializing any sebsite material;
							<ul>
								<li>
									with the exception of souce code, see{" "}
									<a
										href='https://github.com/mgamlem3/Just Weather/blob/main/LICENSE'
										className={styles.link}
									>
										source license
									</a>
									.
								</li>
							</ul>
						</li>
						<li>
							publicly performing and/or showing any website
							material;
						</li>
						<li>
							using this website in any way that is or may be
							damaging to this website;
						</li>
						<li>
							using this website in any way that impacts user
							access to this website;
						</li>
						<li>
							using this website contrary to applicable laws and
							regulations, or in any way may cause harm to the
							website, or to any person or business entity;
						</li>
						<li>
							engaging in any data mining, data harvesting, data
							extracting or any other similar activity in relation
							to this website;
						</li>
						<li>
							using this website to engage in any advertising or
							marketing.
						</li>
					</ul>
				</div>
				<h2>No warranties</h2>
				<div>
					This website is provided “as is,” with all faults, and Just
					Weather express no representations or warranties, of any
					kind related to this website or the materials contained on
					this website. Also, nothing contained on this website shall
					be interpreted as advising you.
				</div>
				<h2>Limitation of Liability</h2>
				<div>
					In no event shall Just Weather, nor any of its officers,
					directors and employees, shall be held liable for anything
					arising out of or in any way connected with your use of this
					website whether such liability is under contract. Just
					Weather, including its officers, directors and employees
					shall not be held liable for any indirect, consequential or
					special liability arising out of or in any way related to
					your use of this website.
				</div>
				<h2>Indemnification</h2>
				<div className={styles.bold}>
					You hereby indemnify to the fullest extent Just Weather from
					and against any and/or all liabilities, costs, demands,
					causes of action, damages and expenses arising in any way
					related to your breach of any of the provisions of these
					Terms.
				</div>
				<h2>Severability</h2>
				<div>
					If any provision of these Terms is found to be invalid under
					any applicable law, such provisions shall be deleted without
					affecting the remaining provisions herein.
				</div>
				<h2>Variation of Terms</h2>
				<div>
					Just Weather is permitted to revise these Terms at any time
					as it sees fit, and by using this website you are expected
					to review these Terms on a regular basis.
				</div>
				<h2>Assignment</h2>
				<div>
					The Just Weather is allowed to assign, transfer, and
					subcontract its rights and/or obligations under these Terms
					without any notification. However, you are not allowed to
					assign, transfer, or subcontract any of your rights and/or
					obligations under these Terms.
				</div>
				<h2>Entire Agreement</h2>
				<div>
					These Terms constitute the entire agreement between Just
					Weather and you in relation to your use of this website, and
					supersede all prior agreements and understandings.
				</div>
				<h2>Governing Law & Jurisdiction</h2>
				<div>
					These Terms will be governed by and interpreted in
					accordance with the laws of the State of Washington of the
					United States, and you submit to the non-exclusive
					jurisdiction of the state and federal courts located in the
					United States for the resolution of any disputes.
				</div>
			</main>
		</Page>
	);
};

export default TermsContent;
