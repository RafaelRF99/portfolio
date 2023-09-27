import { useContext } from 'react'
import { ThemeContext } from '../contents/themeContent'

export const useTheme = () => useContext(ThemeContext)
