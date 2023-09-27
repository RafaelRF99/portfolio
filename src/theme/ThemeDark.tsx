import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const ThemeDark = createGlobalStyle`
    body {
        background-color: #1c1c1c;
        color: #ffffffde;
        border: #fff;
    }
    :root {
        --shadow: #ffffffde;
        --back-secundario: #484848;
        --color-dark: none;
    }
`
export default ThemeDark