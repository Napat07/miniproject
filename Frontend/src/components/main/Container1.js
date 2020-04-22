import React from 'react';
import { Container, Row, Col, FormGroup, NavbarBrand } from 'reactstrap';
import './MainStyle.css'

export default function Container1() {
	return (
		<div class="background-color1" >
			<Container >
				<div class="container ">
					<section class="mt-5 wow fadeIn">
						<div class="row">
							<div class="col-md-6 mb-4">
								<img src="/highlight.PNG" alt="test" className="img-radius img-fluid  hoverable z-depth-1 " />
								<a href="/ShopforUser"><img src="/highlight4.PNG" alt="test" className="img-radius img-fluid  hoverable z-depth-1 " /> </a>
								<a href="/ShopforUser"><img src="/highlight2.PNG" alt="test" className="img-radius img-fluid  hoverable z-depth-1 " /> </a>
							</div>
							<div class="col-md-6   mb-5  background-color-for-course ">
								<Row>
									<Col mb="15">
										<FormGroup>
											<NavbarBrand href="/ShopforUser">
												<img src="/collec1.PNG" />
											</NavbarBrand>
										</FormGroup>
									</Col>
									<Col mb="6">
										<FormGroup>
											<NavbarBrand href="/ShopforUser">
												<img src="/collec2.PNG" />
											</NavbarBrand>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col mb="6">
										<FormGroup>
											<NavbarBrand href="/ShopforUser">
												<img src="/collec3.PNG" />
											</NavbarBrand>
										</FormGroup>
									</Col>

									<Col mb="6">
										<FormGroup>
											<NavbarBrand href="/ShopforUser ">
												<img src="/collec4.PNG" />
											</NavbarBrand>
										</FormGroup>
									</Col>
								</Row>
							</div>
						</div>
					</section>
				</div>
			</Container>
		</div>
	);
}