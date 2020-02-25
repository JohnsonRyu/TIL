import styled from 'styled-components'
import { withDynamicTag } from './DynamicTag'

const TitleBase = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default withDynamicTag(TitleBase)