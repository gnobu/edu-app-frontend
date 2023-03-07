import { STAGES } from "./helpers";
import { THEMES } from "./themes";

export interface ErrorResponse {
    data: string;
    error: {
        message: string;
        stack: string;
    };
    internal: boolean;
    status: number;
    statusText: string;
}

// export type LoaderResponse<T> = Awaited<ReturnType<T>>

export type Test = {
    id: string;
    course: Pick<Course, 'id' | 'courseCode' | 'courseTitle' | 'theme'>;
    testCode: string | number;
    questions: unknown[];
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}

export type Course = {
    id: string;
    tests: Test[];
    theme: keyof typeof THEMES;
    courseCode: string;
    courseTitle: string;
    createdAt: string;
    updatedAt: string;
}

export type Stage = typeof STAGES[number]

