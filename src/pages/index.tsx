import Chart from 'components/Chart'
import Map from 'components/Map'
import ProgressBar from 'components/ProgressBar'

export default function Home() {
  return (
    <>
      <Map />
      <Chart />
      <div
        style={{
          width: 160,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          margin: 40,
          background: '#202124',
          padding: 20,
          borderRadius: 2
        }}
      >
        <ProgressBar completed={50} />
        <ProgressBar completed={24} />
        <ProgressBar completed={79} />
        <ProgressBar completed={97} />
      </div>
    </>
  )
}
