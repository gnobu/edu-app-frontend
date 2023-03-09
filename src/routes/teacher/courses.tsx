import CourseCard from "~/components/CourseCard"
import Header from "~/components/Header"
import IconText from "~/components/IconText"
import { courses } from "~/utils/helpers"

export default function Courses() {
  return (
    <>
      <Header>
        <div className="w-100 flex f-end">
          <button>
            <IconText src="/src/assets/icons/add.svg#img" text="Create" />
          </button>
        </div>
      </Header>
      <section className="container">
        <div className="course-grid m-blk-5">
          {courses.map(course => {
            return <CourseCard key={course.id} course={course} />
          })}
        </div>
      </section>
    </>
  )
}
