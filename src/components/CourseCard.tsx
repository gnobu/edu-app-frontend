import { useEffect, useRef } from "react"
import { THEMES } from "~/utils/themes"
import { Course } from "~/utils/types"

export default function CourseCard({ course }: { course: Pick<Course, 'courseCode' | 'courseTitle' | 'tests' | 'theme'> }) {
    const testsCompleted = course.tests.filter((test) => test.completed).length
    const testsPending = course.tests.length - testsCompleted

    const courseCard = useRef<HTMLElement>(null)
    useEffect(() => {
        courseCard.current?.style.setProperty('--rgb-course', `${THEMES[course.theme]}`)
    }, [])

    return (
        <article ref={courseCard} className="courseCard course-theme col-pry bg-course-alpha flex-col f-gap-1">
            <div className="flex f-gap-1">
                <div className="hex-icon centered-grid">
                    <span className="hex col-course">&#x2B22;</span>
                    <svg className="col-white" width={'20px'} height={'20px'} >
                        <use width={'100%'} href={'/src/assets/icons/book.svg#img'}></use>
                    </svg>
                </div>
                <div className="flex-col f-w-7">
                    <span className="">{course.courseTitle}</span>
                    <span className="">{`(${course.courseCode})`}</span>
                </div>
            </div>
            <div className="flex-col">
                <span className="f-s-3">Completed tests: {testsCompleted}</span>
                <span className="f-s-3">Yet to start: {testsPending}</span>
            </div>
        </article>
    )
}
