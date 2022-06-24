import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { RightSlot, StyledItem } from "../styles/DropdownStyle";


type PropsType = {
    icon: IconDefinition,
    titulo: string,
    edit?: boolean,
    remove?: boolean
}

function DropdownItem(props: PropsType) {

    return (
        <DropdownMenu.Item className={StyledItem({edit: props.edit, remove: props.remove})}>
            {props.titulo}
            <RightSlot>
                <FontAwesomeIcon icon={props.icon} />
            </RightSlot>
        </DropdownMenu.Item>
    )
}

export default DropdownItem