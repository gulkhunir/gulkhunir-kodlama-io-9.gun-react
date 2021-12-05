import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn() {
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/53404730?s=400&u=a033a608e43361e8c0e4cf69c882827198c6f4f9&v=4" />
                <Dropdown pointing="top left" text="Mehmet">
                    <DropdownMenu>
                        <DropdownItem text="Bilgilerim" icon="info"/>
                        <DropdownItem text="Çıkış Yap" icon="sign-out"/>
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>
        </div>
    )
}
