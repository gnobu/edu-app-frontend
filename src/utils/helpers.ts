import { Course, Test } from "./types"

export const STAGES = ['REG', 'WAIT', 'START'] as const


export const tests: Test[] = [
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

export const courses: Course[] = [
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

export function getCourses() {
    return courses
}

export async function getTests() {
    return tests
}

export async function getTest(id: string | undefined) {
    return tests.filter(test => test.id === id).at(0)
}