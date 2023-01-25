import { styled } from './styles'

const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$ignite500',
    borderRadius: '$md',
    height: '$4',
})

export function App() {
    return <h1 style={{ color: colors.ignite300 }}>Hello world</h1>
}
