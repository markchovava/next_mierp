import { cookies } from "next/headers";
import Login from "./(auth)/login/components/Login";
import { redirect } from "next/navigation";


export default async function Home() {
  /* CHECK AUTH */
  const cookieStore = await cookies()
  const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  /* CHECK ADMIN OR CLIENT */
  const adminCookie = await cookieStore.get('MIERP_ADMIN_COOKIE');
  if(!adminCookie?.value){ redirect('/login') }
  if(adminCookie?.value == 'Yes'){ return redirect('/admin') }
  if(adminCookie?.value == 'No'){ return redirect('/client') }

  return (
    <>
     <div className='w-[100%] min-h-screen bg-slate-200'>
          <Login />
      </div>
    </>
  );
}
