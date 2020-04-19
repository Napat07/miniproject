import React from 'react';
import Main from './MainStyle.css' ;
import { Container,Row,Col,FormGroup,NavbarBrand} from 'reactstrap';
import './MainStyle.css'

export default function Container1 () {
    return (
		<div class="background-color1" >
		<Container >
  			<div class="container ">
				<section class="mt-5 wow fadeIn">
					
					<div class="row">
						<div class="col-md-6 mb-4">
							
							<img src="https://image.shutterstock.com/image-photo/portrait-surprised-beautifully-cat-on-260nw-1604783341.jpg" alt="test" className="img-radius img-fluid  hoverable z-depth-1 " />
						</div>

						<div class="col-md-6   mb-4  background-color-for-course ">
						<h1 className="text-center" style={{marginTop: 10 }} >Shop</h1>
        					<Row>
          						<Col mb="6">
            						<FormGroup>
										<NavbarBrand href="">
											<img src="https://gossipstar.com/app/uploads/2019/09/S__64954371.jpg" alt="test"  className="img-radius img-fluid hoverable z-depth-1"  />
										</NavbarBrand>
									</FormGroup>
          						</Col>

          						<Col mb="6">
            						<FormGroup>
										<NavbarBrand href="">
											<img src="https://gossipstar.com/app/uploads/2019/09/S__64954371.jpg" alt="test"  className="img-radius img-fluid  hoverable z-depth-1"  />
										</NavbarBrand>
            						</FormGroup>
          						</Col>

       	 					</Row>							
								<Row>
          						<Col mb="6">
            						<FormGroup>
										<NavbarBrand href="">
											<img src="https://gossipstar.com/app/uploads/2019/09/S__64954371.jpg" alt="test" className="img-radius img-fluid  hoverable z-depth-1" />
										</NavbarBrand>
									</FormGroup>
          						</Col>

          						<Col mb="6">
            						<FormGroup>
										<NavbarBrand href=" ">
											<img src="https://gossipstar.com/app/uploads/2019/09/S__64954371.jpg" alt="test" className="img-radius img-fluid hoverable z-depth-1 " />
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