import { createStitches } from '@stitches/react';
import { mint, tomato, amber, indigo, gray, blackA } from '@radix-ui/colors';

export const { css, globalCss } = createStitches({
    theme: {
        colors: {
            ...mint,
            ...tomato,
            ...amber,
            ...indigo,
            ...gray,
            ...blackA
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
            8: '40px',
            9: '45px',
            10: '50px',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
            8: '40px',
            9: '45px',
            10: '50px',
        },

        fontSizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
            8: '40px',
            9: '45px',
            10: '50px',
        },

        radii:{
            1: '10px',
            2: '50px',
            3: '100px',
            4: '200px',
        },

        fonts:{
            'poppins': "'Poppins', sans-serif"
        },

        fontWeights:{
            1: '300',
            2: '500',
            3: '700'
        }
    }
})

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: '$poppins',
        fontWeight: '$1'
    }
})