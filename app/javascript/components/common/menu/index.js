import React from 'react';
import { Navbar, Container, Columns, Button, Dropdown } from 'react-bulma-components';
import LogoImg from '../../../assets/img/logo.png';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const ColumnsFullWidth = styled(Columns)`
	width: 100%;
	padding-top: 20px;
	padding-left: 10px;
	padding-bottom: 10px;
`;

export default function Menu() {
	let actionButton;	
	if(useLocation().pathname == '/'){
	    actionButton = <a href='users/sign_in' className="is-pulled-right is-right">
	    <Button outlined={true} color="white">ENTRAR</Button>
	    </a>
	}else{
	    actionButton =  <Dropdown className='is-pulled-right is-right' color='dark' label={<FaUserCircle size="2em" />}>
	                        <Dropdown.Item value="other">
	                            <a href='/users/edit'>
	                                Edit User
	                            </a>
	                        </Dropdown.Item> 
	                        <Dropdown.Item value="other">
	                            <a href='/users/sign_out'>
	                                LogOut
	                            </a>
	                        </Dropdown.Item>
	                    </Dropdown>
	}	return (
	<>
		<Navbar color="dark">
		    <Container>
		        <ColumnsFullWidth className='is-mobile'>
		            <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
		                <img src={LogoImg} alt="logo image" className='image' />
		            </Columns.Column>
		            <Columns.Column>
		                {actionButton}
		            </Columns.Column>
		        </ColumnsFullWidth> 
		    </Container>
		</Navbar>
	</>
	);
}
