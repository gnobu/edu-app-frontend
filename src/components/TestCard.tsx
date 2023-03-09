import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { THEMES } from "~/utils/themes"
import { Test } from "~/utils/types"
import IconText from "./IconText"

export default function TestCard({ test }: { test: Test }) {
  const updatedTime = new Date(test.updatedAt).getTime()
  const relativeTime = getRelativeTime(updatedTime)

  const testCard = useRef<HTMLDivElement>(null)
  useEffect(() => {
    testCard.current?.style.setProperty('--rgb-course', `${THEMES[test.course.theme]}`)
  }, [])


  return (
    <div ref={testCard} className="content course-theme col-pry medium bg-tert f-s-3 flex-col f-gap-1">
      <div className="flex f-gap-1">
        <div className="content no-wrap test-block bg-course col-white flex-col centered-flex">
          <span className="blk f-w-6 f-s-4">{test.course.courseCode}</span>
          <span className="blk">{test.questions.length} Questions</span>
        </div>
        <div className="flex-col f-grow">
          <span className="f-w-5 f-s-4">{test.course.courseCode} Continuous Assessment</span>
          <span>Updated {relativeTime}</span>
          <p className="bg-course-alpha badge f-w-5">Test code: {test.testCode}</p>
        </div>
        <div className="flex f-al-start">
          <Link to={`/teacher/drafts/${test.id}`} className="button small ghost">
            <IconText src="/src/assets/icons/edit-2.svg#img" />
          </Link>
          <button className="small ghost">
            <IconText src="/src/assets/icons/trash.svg#img" />
          </button>
        </div>
      </div>
      <div className="flex f-end">
        <button className="ghost small col-accent">
          <IconText src="/src/assets/icons/add.svg#img" text="Add to calendar" size="xs" />
        </button>
        <button className="outline small">Start</button>
      </div>
    </div>
  )
}

const DIVISIONS: { amount: number, name: Intl.RelativeTimeFormatUnit }[] = [
  { name: 'year', amount: 3.154e+7 },
  { name: 'month', amount: 2628002.88 },
  { name: 'week', amount: 604800 },
  { name: 'day', amount: 86400 },
  { name: 'hour', amount: 3600 },
  { name: 'minute', amount: 60 },
  { name: 'second', amount: 1 },
]

function getRelativeTime(time: number) {
  const elapsed = (time - Date.now()) / 1000 // time elapsed in secs
  for (let division of DIVISIONS) {
    if (Math.abs(elapsed) >= 2 * 86400) { // beyond 2 days
      return new Intl.DateTimeFormat('en-US').format(time)
    }
    if (Math.abs(elapsed) > division.amount) {
      return new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' })
        .format(Math.round(elapsed / division.amount), division.name)
    }
  }
}