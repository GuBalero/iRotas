import { css } from "../styles/StyleDefault"

type PropsType = {
    children: React.ReactNode
}

function Button(props:PropsType){

    const button = css({
        cursor: 'pointer',
        border: 'none',
        borderRadius: '$1',
        transition: 'all ease 0.2s',
        fontWeight: '$3',
        fontSize: '$6',
        
        variants: {
            color: {
                blue: {
                    color: '$indigo5',
                    backgroundColor: '$indigo9',
                    '&:hover': {
                        backgroundColor: '$indigo10'
                    },


                }
            }
        }
    })

    return(
        <button className={button({color: 'blue'})}>
            {props.children}
        </button>
    )
}

export default Button