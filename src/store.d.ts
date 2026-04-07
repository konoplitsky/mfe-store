interface Index {
    count: number;
    increment: () => void;
    clear: () => void;
}
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<Index>>;
export default useStore;
//# sourceMappingURL=store.d.ts.map