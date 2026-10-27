import { useEffect, useState } from 'react'

interface ScheduleItem {
  open: boolean
  time: string
}

function Status() {
  const [ schedule, setSchedule ] = useState(null)

  useEffect(() => {
    fetch('/schedule.json')
      .then(response => response.json())
      .then(data => setSchedule(data))
  }, [])
  return (
    <h1>{schedule}</h1>
  )
}

export default Status
