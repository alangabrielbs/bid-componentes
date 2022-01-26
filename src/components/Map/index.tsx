import { useInView } from 'react-intersection-observer'

import dynamic from 'next/dynamic'

import * as S from './styles'

const MapContainer = () => {
  const { ref, inView } = useInView({
    rootMargin: '650px'
  })

  const Map = dynamic(() => import('./Map'), {
    ssr: false
  })

  return (
    <S.Wrapper ref={ref}>
      <S.Title>Veja os pontos importantes de Pelotas pelo mapa</S.Title>
      {inView && <Map />}
    </S.Wrapper>
  )
}

export default MapContainer
