import * as S from './styles'

export type ProgressBarProps = {
  completed: number
  backgroundColor?: string
}

const ProgressBar = ({ completed, backgroundColor }: ProgressBarProps) => {
  const completedValue = Math.min(completed, 100)

  return (
    <S.Wrapper>
      <S.Filler
        completed={completedValue}
        backgroundColor={backgroundColor}
        role="progressbar"
        aria-valuenow={completedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </S.Wrapper>
  )
}

export default ProgressBar
