import { create } from 'zustand'

console.log('123')
console.log('123')
console.log('123')

interface Index {
    count: number
    increment: () => void
    clear: () => void
}

const useStore = create<Index>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    clear: () => set({ count: 0 }),
}))

export default useStore
