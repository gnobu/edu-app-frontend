import CourseCard from "../../components/CourseCard"
import Header from "../../components/Header"
import IconText from "../../components/IconText"
import TestCard from "../../components/TestCard"
import { Course, Test } from "../../utils/types"

export default function Overview() {
  // throw new Error()
  return (
    <>
      <Header>
        <>
          <h2 className="f-s-6 f-w-5">Welcome back, {'John'}</h2>
          <button>
            <IconText src="/src/assets/icons/add.svg#img" text="Create" />
          </button>
        </>
      </Header>

      <div className="container flex-col f-gap-1">
        <section>
          <h3 className="">Courses</h3>
          {/* <div className="content flex f-gap-1 f-wrap"> */}
          <div className="content bg-white course-grid">
            {courses.map(course => {
              return <CourseCard key={course.id} course={course} />
            })}
          </div>
        </section>
        <section className="drafts">
          <h3 className="">Drafts</h3>
          {/* <div className="content flex f-gap-1 f-wrap"> */}
          <div className="content bg-white draft-grid">
            {tests.filter(({ completed }) => !completed).map(test => {
              return <TestCard key={test.id} test={test} />
            })}
          </div>
        </section>
      </div>
    </>
  )
}

const tests: Test[] = [
  {
    id: '1',
    course: {
      id: '1',
      courseCode: 'MEE 414',
      courseTitle: "Machine Design II",
      theme: 'DARK',
    },
    testCode: '111111',
    questions: [],
    completed: true,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
  {
    id: '2',
    course: {
      id: '1',
      courseCode: 'MEE 414',
      courseTitle: "Machine Design II",
      theme: 'DARK',
    },
    testCode: '222222',
    questions: [],
    completed: true,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
  {
    id: '3',
    course: {
      id: '1',
      courseCode: 'MEE 414',
      courseTitle: "Machine Design II",
      theme: 'DARK',
    },
    testCode: '333333',
    questions: [],
    completed: true,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
  {
    id: '4',
    course: {
      id: '1',
      courseCode: 'MEE 414',
      courseTitle: "Machine Design II",
      theme: 'DARK',
    },
    testCode: '444444',
    questions: [],
    completed: false,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
  {
    id: '5',
    course: {
      id: '1',
      courseCode: 'MEE 414',
      courseTitle: "Machine Design II",
      theme: 'DARK',
    },
    testCode: '555555',
    questions: [],
    completed: false,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
  {
    id: '6',
    course: {
      id: '2',
      courseCode: 'MEE 314',
      courseTitle: "Machine Design I",
      theme: 'GREEN',
    },
    testCode: '666666',
    questions: [],
    completed: true,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
  {
    id: '7',
    course: {
      id: '2',
      courseCode: 'MEE 314',
      courseTitle: "Machine Design I",
      theme: 'GREEN',
    },
    testCode: '777777',
    questions: [],
    completed: false,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
  {
    id: '8',
    course: {
      id: '2',
      courseCode: 'MEE 314',
      courseTitle: "Machine Design I",
      theme: 'GREEN',
    },
    testCode: '888888',
    questions: [],
    completed: false,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
  {
    id: '9',
    course: {
      id: '3',
      courseCode: 'MEE 541',
      courseTitle: "Fluid Machinery",
      theme: 'RED',
    },
    testCode: '999999',
    questions: [],
    completed: true,
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
  },
]

const courses: Course[] = [
  {
    id: '1',
    courseCode: 'MEE 414',
    courseTitle: "Machine Design II",
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
    tests: tests.filter(({ course }) => course.id === '1'),
    theme: 'DARK',
  },
  {
    id: '2',
    courseCode: 'MEE 314',
    courseTitle: "Machine Design I",
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
    tests: tests.filter(({ course }) => course.id === '2'),
    theme: 'GREEN',
  },
  {
    id: '3',
    courseCode: 'MEE 541',
    courseTitle: "Fluid Machinery",
    createdAt: '2023-01-29T09:36:27.524+00:00',
    updatedAt: '2023-01-29T09:36:27.524+00:00',
    tests: tests.filter(({ course }) => course.id === '3'),
    theme: 'RED',
  },
]