import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }), 
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "A value is missing." };
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products: [...state.products, data.data] }));
        return { success: true, messsage: "Product Created Successfully"}
    }
}));

