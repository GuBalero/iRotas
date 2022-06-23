import Button from "../components/Button";
import Container from "../components/Container";
import Item from "../components/Item";
import Lista from "../components/Lista";
import Main from "../components/Main";


function Rotas() {

    var item = {
        id: 0, 
        img: "local1",
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

    return (
        <Main>
            <Container width="30%" height="100%">
                <Button>+</Button>
                <Lista>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                    <Item data={item} click={() => {}}></Item>
                </Lista>
            </Container>

            <Container width="70%" height="100%">
                
            </Container>
        </Main>
    )
}

export default Rotas