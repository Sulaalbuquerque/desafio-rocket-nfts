import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { dark } from './styles/themes/theme'

import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle/>
          <Home/>
      </ThemeProvider>
    </>
  )
}

export default App
