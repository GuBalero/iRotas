import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

import { css } from '../styles/StyleDefault';
import { StyledArrow, StyledContent, StyledLabel } from '../styles/DropdownStyle';


type PropsType = {
    children: React.ReactNode,
    label: string
}

function Dropdown(props: PropsType) {

    return (
        <DropdownMenu.Root>

            <DropdownMenu.Trigger>
                {/* <FontAwesomeIcon icon={faGear} /> */}
            </DropdownMenu.Trigger>


            <DropdownMenu.Content className={"dropmenu-content " + StyledContent()}>

                <DropdownMenu.Label className={StyledLabel()}>
                    { props.label}
                </DropdownMenu.Label>

                {props.children}

                <DropdownMenu.Arrow className={StyledArrow()} />
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default Dropdown