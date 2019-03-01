import styled, { keyframes } from 'styled-components'

const IndeterminateAnimation = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`

const ShortIndeterminateAnimation = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`

const Indeterminate = styled.div`
  background-color: ${({ theme: { tertiary } }) => tertiary};
  &:before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${IndeterminateAnimation} 2.1s
      cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${ShortIndeterminateAnimation} 2.1s
      cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
  }
`

const ProgressBar = styled.div`
  margin: 0 0 -8px;
  position: relative;
  height: 8px;
  display: block;
  width: 100%;
  background-color: ${({ theme: { primary } }) => primary};
  overflow: hidden;
`

export { ProgressBar, Indeterminate }