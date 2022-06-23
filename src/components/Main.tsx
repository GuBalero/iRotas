import { css } from "../styles/StyleDefault"
import Waves from "../content/imgs/bg.svg"

function Main(props:any){
    
    const main = css({
        backgroundImage: `url(${Waves})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
        position: "relative",
        display: "flex",
        padding: '$5'
    })
    
    return (
        <main className={main()}>
            {props.children}
        </main>
    )
}

export default Main