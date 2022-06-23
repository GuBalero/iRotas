import { css } from "../styles/StyleDefault"

import Local1 from '../content/imgs/local1.png'
import Local2 from '../content/imgs/local2.png'
import Local3 from '../content/imgs/local3.png'
import Local4 from '../content/imgs/local4.png'
import Local5 from '../content/imgs/local5.png'
import Local6 from '../content/imgs/local6.png'
import Local7 from '../content/imgs/local7.png'
import Dropdown from "./Dropdown"
import DropdownItem from "./DropdownItem"
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons"

type PropsType = {
    active?: boolean,
    data: ItemType
    click: Function
}

type ItemType = {
    id: number,
    img: string,
    titulo: string,
    partida: LocalType,
    destino: LocalType
}

type LocalType = {
    latitude: number,
    longitude: number
}

const mapImages = new Map()
mapImages.set('local1', Local1)
mapImages.set('local2', Local2)
mapImages.set('local3', Local3)
mapImages.set('local4', Local4)
mapImages.set('local5', Local5)
mapImages.set('local6', Local6)
mapImages.set('local7', Local7)

function Item(props: PropsType) {

    const item = css({
        padding: '$2',
        marginRight: '$3',
        cursor: 'pointer',
        borderRadius: '$1',
        transition: 'all ease 0.1s',
        display: "flex",
        alignItems: "center",
        position: "relative",
        
        '&:hover': {
            background: '$mint4'
        },

        variants: {
            active: {
                true: {
                    backgroundColor: '$mint1',
                    '&:hover': {
                        backgroundColor: '$mint1',
                    }
                }
            }
        }
    })

    const img = css({
        height: '$10',
        width: 'auto',
    })

    const titulo = css({
        textTransform: 'uppercase',
        fontSize: '$4',
        fontWeight: '$3',
        color: '$mint12',
        marginLeft: '$3',
        maxWidth:'70%',
        overflow: "hidden",
        textOverflow: "ellipsis"
    })

    return (
        <li className={item({ active: props.active })} >
            <img
                src={mapImages.get(props.data.img)}
                alt="Casa"
                className={img()} />
            
            <h1 className={titulo()}>
                {props.data.titulo}
            </h1>

            <Dropdown label="Opções">
                <DropdownItem titulo="Editar" icon={faPen} edit={true} />
                <DropdownItem titulo="Remover" icon={faTrashCan} remove={true} />
            </Dropdown>
        </li>
    )
}

export default Item