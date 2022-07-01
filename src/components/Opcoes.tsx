import { FontAwesomeIcon, Props } from "@fortawesome/react-fontawesome"
import { css } from "../styles/StyleDefault"
import { faGear, faPen, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { red } from "@radix-ui/colors/types/dark/red"
import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, StyledContent, StyledOverlay, StyledTitle } from "../styles/ModalStyle"
import { StyledButton } from "./Button"
import ModalCadastrar from "./ModalCadastrar"

type PropsType = {
    data: ItemType,
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

function Opcoes(props: PropsType) {

    const opcao = css({
        border: 'none',
        fontSize: '$4',
        color: '$gray11',
        cursor: 'pointer',
        padding: '$2',
        width: '$8',
        height: '$8',
        display: 'none',
        alignItems: 'center',
        backgroundColor: 'transparent',
        transition: 'all ease 0.1s',

        variants: {
            type: {
                options: {
                    display: 'flex',
                    opacity: 1,
                    borderRadius: '$3',
                },
                remove: {
                    '&:hover': { color: '$tomato9' }
                },
                edit: {
                    '&:hover': { color: '$amber10' }
                }
            }
        }
    })

    const opcoes = css({
        transition: 'all ease 0.2s',
        borderRadius: '$3',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '$8',
        overflow: 'hidden',
        opacity: 0,
        position: 'absolute',
        right: '$2',

        '&:hover': {
            backgroundColor: '$gray7',
            maxWidth: 'calc(3 * $8)'
        },

        '&:hover > button': {
            display: 'flex',
        },

        '&:hover > button.options': {
            backgroundColor: '$mint7',
        },

        '&:hover ~ h1': {
            width: '53%',
        }
    })

    return (
        <div className={opcoes()}>
            <button className={opcao({ type: "options" }) + ' options'}>
                <FontAwesomeIcon icon={faGear} />
            </button>

            <ModalCadastrar dataEditar={props.data} editar={props.editItem}>
                <Dialog.Trigger className={opcao({ type: "edit" })}>
                    <FontAwesomeIcon icon={faPen} />
                </Dialog.Trigger>
            </ModalCadastrar>

            <Dialog.Root>
                <Dialog.Trigger className={opcao({ type: "remove" })}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className={StyledOverlay()} />
                    <Dialog.Content className={StyledContent()}>
                        <Dialog.Title className={StyledTitle()}>Remover</Dialog.Title>
                        <Dialog.Description>Realmente deseja remover essa rota?</Dialog.Description>
                        <Dialog.Close
                            className={StyledButton({ color: 'red' })}
                            onClick={() => props.removeItem(props.data.id)}
                        >
                            Confirmar
                        </Dialog.Close>
                        <Dialog.Close asChild>
                            <CloseButton>
                                <FontAwesomeIcon icon={faXmark} />
                            </CloseButton>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}

export default Opcoes