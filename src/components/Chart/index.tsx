import {
  ResponsiveContainer,
  AreaChart,
  YAxis,
  Area,
  Tooltip,
  TooltipProps
} from 'recharts'
import {
  ValueType,
  NameType
} from 'recharts/src/component/DefaultTooltipContent'

import { subDays } from 'date-fns'

import * as S from './styles'

type DataProps = {
  date: string
  janeiro: number
  fevereiro: number
}

const data = [] as DataProps[]

for (let num = 0; num <= 15; num++) {
  data.push({
    date: subDays(new Date('01-31-2022'), num).toISOString().substr(0, 10),
    janeiro: Math.floor(Math.random() * num * 2),
    fevereiro: Math.floor(Math.random() * num * 4)
  })
}

const Chart = () => {
  return (
    <S.WrapperChart>
      <S.Title>Furto comercial</S.Title>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FEB746" stopOpacity={0.5} />
              <stop offset="75%" stopColor="#FEB746" stopOpacity={0} />
            </linearGradient>
          </defs>

          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#329DFF" stopOpacity={0.5} />
              <stop offset="75%" stopColor="#329DFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="janeiro"
            stroke="#329DFF"
            fill="url(#color)"
            dot={(props) => <S.Dot {...props} />}
          />

          <Area
            type="monotone"
            dataKey="fevereiro"
            stroke="#FEB746"
            fill="url(#color1)"
            dot={(props) => <S.Dot {...props} />}
          />

          <Tooltip content={<CustomTooltip />} />

          <YAxis axisLine={false} tickLine={false} tickCount={5} />
        </AreaChart>
      </ResponsiveContainer>
    </S.WrapperChart>
  )
}

const CustomTooltip = ({
  active,
  payload
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <S.WrapperTooltip>
        {payload.map((item) => (
          <S.TooltipItem key={item.name} color={item.color}>
            <span>{item.name}</span>: {item.value}
          </S.TooltipItem>
        ))}
      </S.WrapperTooltip>
    )
  }

  return null
}

export default Chart
