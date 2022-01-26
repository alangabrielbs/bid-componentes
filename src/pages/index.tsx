import Chart from 'components/Chart'
import Map from 'components/Map'

export default function Home() {
  return (
    <>
      <Map />
      <div style={{ maxWidth: 570 }}>
        <Chart />
      </div>
    </>
  )
}
