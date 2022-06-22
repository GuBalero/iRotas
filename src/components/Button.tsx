import { css } from "../styles/style-config"

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
        fontSize: '$5',
        
        variants: {
            color: {
                green: {
                    color: '$indigo12',
                    backgroundColor: '$indigo9',
                    '&:hover': {
                        backgroundColor: '$indigo10'
                    },
                }
            }
        }
    })

    return(
        <button className={button({color: 'green'})}>
            {props.children}
        </button>
    )
}

export default Button