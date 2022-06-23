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

    const opcoes = css({
        border: 'none',
        position: 'absolute',
        right: '$2',
        fontSize: '$4',
        color: '$gray9',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        padding: '$2',
        width: '$8',
        height: '$8',
        display: 'flex',
        alignItems: 'center',
        transition: 'all ease 0.1s',
        borderRadius: '$3',

        '&:hover': {
            backgroundColor: '$gray7',
            color: '$gray10',
        }
    })

    return (
        <DropdownMenu.Root>

            <DropdownMenu.Trigger className={opcoes()}>
                <FontAwesomeIcon icon={faGear} />
            </DropdownMenu.Trigger>


            <DropdownMenu.Content className={StyledContent()}>

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