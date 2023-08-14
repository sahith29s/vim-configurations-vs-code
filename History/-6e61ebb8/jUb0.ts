import { create } from "zustand"

const useCounter = create((set) => {
    return {
        productsArray: [15],
        add: () : any=> set((state : any) => ({ productsArray: [...state.productsArray , 10] })),
    };
});

export default useCounter