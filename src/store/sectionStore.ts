import { create } from "zustand"

interface SectionState {
  section: string
  selectSection: (section: string) => void
}

const useSectionStore = create<SectionState>((set) => ({
  section: "Dashboard",
  selectSection: (section: string) => set({section})
}))

export default useSectionStore;