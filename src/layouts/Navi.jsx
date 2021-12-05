import React, {useState} from 'react'
import { Menu, Container } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignOut from './SignOut'

export default function Navi() {
    const [isAuthenticated, setisAuthenticated] = useState(true)
	return (
		<div>
			<Menu inverted fixed='top'>
				<Container>
					<Menu.Item name='home' />
					<Menu.Item name='messages' />

					<Menu.Menu position='right'>
						<Menu.Item>
							<CartSummary />
                        {isAuthenticated?<SignedIn />:<SignOut />}
							
						</Menu.Item>
					</Menu.Menu>
				</Container>
			</Menu>
		</div>
	)
}
