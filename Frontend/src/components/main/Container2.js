import React from 'react';
import { Container, Row, Col, FormGroup, NavbarBrand } from 'reactstrap';
import './MainStyle.css'

export default function Container1() {
	return (
		<div className="background-color2">
			<Container>
				<div class="container">
					<section class="mt-5 wow fadeIn">
						<div class="row">
							<div class="col-md-6 mb-4 background-color-for-shop">
								<Row>
									<Col mb="15">
										<FormGroup>
											<NavbarBrand href="/ShopforUser">
												<img src="/sale1.PNG" />
											</NavbarBrand>
										</FormGroup>
									</Col>
									<Col mb="6">
										<FormGroup>
											<NavbarBrand href="/ShopforUser">
												<img src="/sale2.PNG" />
											</NavbarBrand>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col mb="6">
										<FormGroup>
											<NavbarBrand href="/ShopforUser">
												<img src="/sale3.PNG" />
											</NavbarBrand>
										</FormGroup>
									</Col>

									<Col mb="6">
										<FormGroup>
											<NavbarBrand href="/ShopforUser ">
												<img src="/sale4.PNG" />
											</NavbarBrand>
										</FormGroup>
									</Col>
								</Row>
							</div>
							<div class="col-md-6 mb-4">
								<img src="/highlight6.PNG" alt="test" className="img-radius img-fluid  hoverable z-depth-1 " />
								<a href="/ShopforUser"><img src="/highlight5.PNG" alt="test" className="img-radius img-fluid  hoverable z-depth-1 " width='500' /> </a>
							</div>
						</div>
					</section>
				</div>
			</Container>
		</div>
	);
}