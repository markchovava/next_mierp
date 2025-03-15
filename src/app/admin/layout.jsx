import AdminContextProvider from "@/context/AdminContext";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";



export default async function Layout({ children }) {
  


    return (
      <>
      <AdminContextProvider>
        <div className="grid lg:grid-cols-5 grid-cols-1">
          <div className="col-span-1 bg-slate-900">
            <Sidebar />
          </div>
          <div className="col-span-4">
            <Header />
            {children}
          </div>
        </div>
      </AdminContextProvider>
      </>
    )
  }