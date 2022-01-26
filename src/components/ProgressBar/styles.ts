import styled, { css } from 'styled-components'

import { ProgressBarProps } from '.'

export const Wrapper = styled.div`
  height: 4px;
  width: 100%;
  background: #000000;
  border-radius: 1rem;
  overflow: hidden;
`

export const Filler = styled.div<ProgressBarProps>`
  ${({ completed, backgroundColor = '#ff3e32' }) => css`
    height: 100%;
    width: ${completed}%;
    background: ${backgroundColor};
    border-radius: 1rem;
  `}
`
