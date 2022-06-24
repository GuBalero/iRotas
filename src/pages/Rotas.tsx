import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Item from "../components/Item";
import Lista from "../components/Lista";
import Main from "../components/Main";
import ModalCadastrar from "../components/ModalCadastrar";

import Local1 from '../content/imgs/local1.png'

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

function Rotas() {

    const [rotas, setRotas] = useState<ItemType[]>(getItens())
    const [selecionado, setSelecionado] = useState(-1)

    var item = {
        id: 0,
        img: Local1,
        titulo: "trabalho",
        partida: {
            latitude: -23.54878745465809,
            longitude: -46.41712640394394
        },
        destino: {
            latitude: -23.64521870355026,
            longitude: -46.51046353093108
        },
    }

    var item2 = {
        id: 1,
        img: Local1,
        titulo: "casa",
        partida: {
            latitude: -23.54878745465809,
            longitude: -46.41712640394394
        },
        destino: {
            latitude: -23.64521870355026,
            longitude: -46.51046353093108
        },
    }

    function getItens():ItemType[] {
        let storage = localStorage.getItem("rotas")
        if(storage != null){
            return JSON.parse(storage)
        }

        return []
    }

    function setItens(itens:any){
        localStorage.setItem("rotas", JSON.stringify(itens))
        setRotas(getItens)
    }
    
    function addItem(item: ItemType){
        let itens = rotas
        itens.push(item)
        setItens(itens)
    }

    return (
        <Main>
            <Container width="30%" height="100%">
                <ModalCadastrar cadastrar={addItem}/>
                <Lista>
                    {
                        rotas.map(rota => (
                                <Item key={rota.id} data={rota} ativo={selecionado == rota.id} setState={setSelecionado} />
                        ))
                    }
                </Lista>
            </Container>

            <Container width="70%" height="100%">

            </Container>
        </Main>
    )
}

export default Rotas