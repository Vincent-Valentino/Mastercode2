import { create } from "zustand"

interface CourseState {
    course: string
    selectCourse: (course: string) => void
}

const useCourseStore<CourseState> = ((set) => ({
    course: "Select",
    selectCourse: (course: string) => set({course})
}))

export default useCourseStore