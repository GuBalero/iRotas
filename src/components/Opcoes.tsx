import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { css } from "../styles/StyleDefault"
import { faGear, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Opcoes() {

    const opcao = css({
        border: 'none',
        fontSize: '$4',
        color: '$gray11',
        cursor: 'pointer',
        padding: '$2',
        width: '$8',
        height: '$8',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        top: 'calc(50% - $4)',
        transition: 'all ease 0.1s',
        
        variants: {
            type: {
                options: {
                    display: 'flex',
                    opacity: 1,
                    borderRadius: '$3',
                },
                remove:{
                    '&:hover':{color: '$tomato9'}
                },
                edit:{
                    '&:hover':{color: '$amber10'}
                }
            }
        }
    })

    const opcoes = css({
        position: 'absolute',
        right: '$2',
        float: 'left',
        transition: 'all ease 0.2s',
        borderRadius: '$3',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '$8',
        overflow: 'hidden',
        opacity: 0,

        '&:hover': {
            backgroundColor: '$gray7',
            maxWidth: 'calc(3 * $8)'
        },

        '&:hover > button': {
            display: 'flex',
        },

        '&:hover > button.options':{
            backgroundColor: '$mint7',
        }
    })

    return (
        <div className={opcoes()}>
            <button className={opcao({ type: "options" }) + ' options'}>
                <FontAwesomeIcon icon={faGear} />
            </button>

            <button className={opcao({type: "edit"})}>
                <FontAwesomeIcon icon={faPen} />
            </button>

            <button className={opcao({type: "remove"})}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    )
}

export default Opcoes