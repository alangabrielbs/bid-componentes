import styled, { css } from 'styled-components'

export const WrapperChart = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 105px 45px 45px 0;
  position: relative;

  .recharts-wrapper .recharts-cartesian-grid-horizontal line:first-child,
  .recharts-wrapper .recharts-cartesian-grid-horizontal line:last-child {
    stroke-opacity: 0;
  }

  & .recharts-cartesian-axis-tick-value {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 48px;
    text-align: right;
    color: #36373a;
  }
`

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #36373a;

  position: absolute;
  top: 40px;
  left: 40px;
`

export const Dot = styled.circle`
  ${({ stroke }) => css`
    fill: ${stroke};
    fill-opacity: 1;
  `}
`

export const WrapperTooltip = styled.div`
  background: #fff;
  border-radius: 2px;
  padding: 16px;
  box-shadow: 0 6px 23px rgb(0 0 0 / 10%);
`

type TooltipItemProps = {
  color?: string
}

export const TooltipItem = styled.p<TooltipItemProps>`
  ${({ color }) => css`
    font-family: 'Poppins';
    text-transform: capitalize;
    color: #36373a;

    span {
      color: ${color};
    }
  `}
`
