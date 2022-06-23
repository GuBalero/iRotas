import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { styled } from "@stitches/react";
import { css } from "../styles/StyleDefault";


type PropsType = {
    icon: IconDefinition,
    titulo: string,
    edit?: boolean,
    remove?: boolean
}

function DropdownItem(props: PropsType) {

    const StyledItem = css({
        all: 'unset',
        fontSize: '$3',
        lineHeight: 1,
        color: '$gray11',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        height: 25,
        padding: '0 5px',
        position: 'relative',
        paddingLeft: 25,
        userSelect: 'none',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '$gray9',
            color: '$gray1',
        },

        variants: {
            edit: {
                true: {
                    '&:hover': {
                        backgroundColor: '$amber9',
                    }
                },
            },
            remove: {
                true: {
                    '&:hover': {
                        backgroundColor: '$tomato9',
                    }
                }
            }
        }
    });


    const RightSlot = styled('div', {
        marginLeft: 'auto',
        paddingLeft: 20,
        color: '$gray11',
        ':focus > &': { color: '$gray1' },
    });

    return (
        <DropdownMenu.Item className={StyledItem({ edit: props.edit, remove: props.remove })}>
            {props.titulo}
            <RightSlot>
                <FontAwesomeIcon icon={props.icon} />
            </RightSlot>
        </DropdownMenu.Item>
    )
}

export default DropdownItem