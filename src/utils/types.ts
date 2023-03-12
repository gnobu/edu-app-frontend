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

export type Option = {
    text: string,
    isCorrect: boolean
}

export type Question = {
    answerType: 'single'|'multiple',
    config: 'manual'|'generated',
    question: string,
    options: Option[]
}

export type Test = {
    id: string;
    course: Pick<Course, 'id' | 'courseCode' | 'courseTitle' | 'theme'>;
    testCode: string | number;
    questions: Question[];
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

