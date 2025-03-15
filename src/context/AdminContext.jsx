"use client"
import { RoleInit, RoleInitialState, RoleReducer } from "@/reducers/RoleReducer";
import { ExpenseInit, ExpenseInitialState, ExpenseReducer } from "@/reducers/ExpenseReducer";
import { createContext, useContext, useReducer } from "react";
import { SalesInit, SalesInitialState, SalesReducer } from "@/reducers/SalesReducer";
import { PurchaseInit, PurchaseInitialState, PurchaseReducer } from "@/reducers/PurchaseReducer";
import { ProductInit, ProductInitialState, ProductReducer } from "@/reducers/ProductReducer";
import { SubsidiaryInit, SubsidiaryInitialState, SubsidiaryReducer } from "@/reducers/SubsidiaryReducer";
import { UserInit, UserInitialState, UserReducer } from "@/reducers/UserReducer";



export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
    const [expenseState, expenseDispatch] = useReducer(ExpenseReducer, ExpenseInitialState, ExpenseInit);
    const [salesState, salesDispatch] = useReducer(SalesReducer, SalesInitialState, SalesInit);
    const [purchaseState, purchaseDispatch] = useReducer(PurchaseReducer, PurchaseInitialState, PurchaseInit);
    const [productState, productDispatch] = useReducer(ProductReducer, ProductInitialState, ProductInit);
    const [roleState, roleDispatch] = useReducer(RoleReducer, RoleInitialState, RoleInit);
    const [subsidiaryState, subsidiaryDispatch] = useReducer(SubsidiaryReducer, SubsidiaryInitialState, SubsidiaryInit);
    const [userState, userDispatch] = useReducer(UserReducer, UserInitialState, UserInit);

    
    return (
        <AdminContext.Provider value={{ 
            expenseState, expenseDispatch, 
            roleState, roleDispatch,
            salesState, salesDispatch,
            purchaseState, purchaseDispatch,
            productState, productDispatch,
            subsidiaryState, subsidiaryDispatch,
            userState, userDispatch,
        }}>
            {children}
        </AdminContext.Provider>
      )
}

export const AdminContextState = () => {
    return useContext(AdminContext)
}
 
