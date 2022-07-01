import { useState } from "react"
import { css } from "../styles/StyleDefault"
import Opcoes from "./Opcoes"


type PropsType = {
    ativo: boolean,
    data: ItemType,
    setSelecionado: Function,
    removeItem: Function,
    editItem: Function
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

        '&:hover > div': {
            opacity: 1,
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
        width: '70%',
        overflow: "hidden",
        textOverflow: "ellipsis",
        position: 'absolute',
        left: 'calc($10 + $9)',
        transition: 'all ease 0.2s',
        wordSpacing: 1,
        letterSpacing: -0.5
    })

    function click() {
        props.setSelecionado(props.data.id)
    }

    return (
        <li className={item({ active: props.ativo })} onClick={click}>
            <Opcoes 
                data={props.data}
                removeItem={props.removeItem}
                editItem={props.editItem}
            />
            
            <img
                src={props.data.img}
                alt="Casa"
                className={img()} />

            <h1 className={titulo()}>
                {props.data.titulo}
            </h1>

        </li>
    )
}

export default Item