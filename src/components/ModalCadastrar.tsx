import Local1 from '../content/imgs/local1.png'
import Local2 from '../content/imgs/local2.png'
import Local3 from '../content/imgs/local3.png'
import Local4 from '../content/imgs/local4.png'
import Local5 from '../content/imgs/local5.png'
import Local6 from '../content/imgs/local6.png'
import Local7 from '../content/imgs/local7.png'
import Globo from '../content/imgs/globo.png'
import Location from '../content/imgs/pin.png'

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Fieldset, Input, Label, StyledContent, StyledDescription, StyledOverlay, StyledTitle } from "../styles/ModalStyle"
import Button, { StyledButton } from "./Button"
import * as RadioGroup from '@radix-ui/react-radio-group'
import { css } from "../styles/StyleDefault"
import { useState } from 'react'

type PropsType = {
    cadastrar: Function
}

function ModalCadastrar(props: PropsType) {

    const [descricao, setDescricao] = useState("")
    const [partida, setPartida] = useState("")
    const [destino, setDestino] = useState("")
    const [imagem, setImagem] = useState(Local1)

    let geolocation = navigator.geolocation

    const radio = css({
        height: 80,
        width: 80,
        backgroundColor: '$mint4',
        padding: '$2',
        cursor: "pointer",
        borderRadius: '$1',
        border: '2px solid $mint4',
        transition: 'all ease 0.11s',
        margin: '$1',

        '& > img': {
            maxHeight: '100%',
            maxWidth: '100%',
        },

        '&[data-state="checked"]': { borderColor: '$mint8' },

        variants: {
            myLocation: {
                true: {
                    height: 40,
                    width: 40,
                    padding: '$1',
                    margin: 0,
                    backgroundColor: '$mint4',
                }
            }
        }
    })

    const group = css({
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '20px',
        marginBottom: '$5'
    })

    function getMyLocation(e: any) {

        geolocation.getCurrentPosition(position => {
            const endereco = `${position.coords.latitude},${position.coords.longitude}`

            if (e.target.id == 'myPartida') {
                setPartida(endereco)
            }
            else if (e.target.id == 'myDestino') {
                setDestino(endereco)
            }
        })
    }

    function LimparForm() {
        setDescricao("")
        setPartida("")
        setDestino("")
        setImagem(Local1)
    }

    function Cadastrar() {
        let item = {
            id: Date.now(),
            img: imagem,
            titulo: descricao,
            partida: {
                latitude: partida.split(',')[0],
                longitude: partida.split(',')[1]
            },
            destino: {
                latitude: destino.split(',')[0],
                longitude: destino.split(',')[1]
            }
        }

        props.cadastrar(item)
    }

    return (
        <Dialog.Root onOpenChange={LimparForm}>
            <Dialog.Trigger className={StyledButton()}>+</Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className={StyledOverlay()} />
                <Dialog.Content className={StyledContent()}>
                    <Dialog.Title className={StyledTitle()}>Cadastrar</Dialog.Title>
                    <Dialog.Description className={StyledDescription()}>Cadastre uma nova rota</Dialog.Description>

                    <Fieldset>
                        <Label htmlFor="descricao">Descrição</Label>
                        <Input id="descricao" placeholder="Ex: Casa" onChange={(e) => setDescricao(e.target.value)} value={descricao}/>
                    </Fieldset>

                    <Fieldset>
                        <Label htmlFor="partida">Partida:</Label>
                        <Input id="partida" placeholder="Ex: Rua Partida, 10" onChange={(e) => setPartida(e.target.value)} value={partida}/>
                        <img
                            src={Location}
                            alt="Pin de localização"
                            className={radio({ myLocation: geolocation != null })}
                            onClick={getMyLocation}
                            id='myPartida'
                        />
                    </Fieldset>

                    <Fieldset>
                        <Label htmlFor="destino">Destino:</Label>
                        <Input id="destino" placeholder="Ex: Rua Destino, 20" onChange={(e) => setDestino(e.target.value)} value={destino}/>
                        <img
                            src={Location}
                            alt="Pin de localização"
                            className={radio({ myLocation: geolocation != null })}
                            onClick={getMyLocation}
                            id='myDestino'
                        />
                    </Fieldset>

                    <Fieldset>
                        <Label>Ícone:</Label>
                    </Fieldset>

                    <RadioGroup.Root defaultValue={Local1} className={group()} onValueChange={(e) => { setImagem(e) }}>
                        <RadioGroup.Item value={Local1} className={radio()}>
                            <img src={Local1} alt="Imagem de Casa 1" />
                        </RadioGroup.Item>

                        <RadioGroup.Item value={Local2} className={radio()}>
                            <img src={Local2} alt="Imagem de Casa 2" />
                        </RadioGroup.Item>

                        <RadioGroup.Item value={Local3} className={radio()}>
                            <img src={Local3} alt="Imagem de Casa 3" />
                        </RadioGroup.Item>

                        <RadioGroup.Item value={Local4} className={radio()}>
                            <img src={Local4} alt="Imagem de Casa 4" />
                        </RadioGroup.Item>

                        <RadioGroup.Item value={Local5} className={radio()}>
                            <img src={Local5} alt="Imagem de Casa 5" />
                        </RadioGroup.Item>

                        <RadioGroup.Item value={Local6} className={radio()}>
                            <img src={Local6} alt="Imagem de Casa 6" />
                        </RadioGroup.Item>

                        <RadioGroup.Item value={Local7} className={radio()}>
                            <img src={Local7} alt="Imagem de Casa 7" />
                        </RadioGroup.Item>

                        <RadioGroup.Item value={Globo} className={radio()}>
                            <img src={Globo} alt="Imagem de Casa 7" />
                        </RadioGroup.Item>
                    </RadioGroup.Root>

                    <Dialog.Close
                        className={StyledButton({ habilitado: descricao !== "" && partida !== "" && destino !== "" && imagem !== "" })}
                        onClick={Cadastrar}
                    >

                        Cadastrar
                    </Dialog.Close>

                    <Dialog.Close asChild>
                        <CloseButton>
                            <FontAwesomeIcon icon={faXmark} />
                        </CloseButton>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default ModalCadastrar