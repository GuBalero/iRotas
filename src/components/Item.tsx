import { useState } from "react"
import { css } from "../styles/StyleDefault"
import Opcoes from "./Opcoes"


type PropsType = {
    ativo: boolean,
    data: ItemType,
    setState: Function
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

        '&:hover > div':{
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
        marginLeft: '$3',
        maxWidth: '55%',
        overflow: "hidden",
        textOverflow: "ellipsis"
    })

    function click(){
        props.setState(props.data.id)
    }   

    return (
        <li className={item({ active: props.ativo })} onClick={click}>
            <img
                src={props.data.img}
                alt="Casa"
                className={img()} />

            <h1 className={titulo()}>
                {props.data.titulo}
            </h1>

            <Opcoes/>
        </li>
    )
}

export default Item