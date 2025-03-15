import Login from "./(auth)/login/components/Login";

export default function Home() {
  return (
    <>
     <div className='w-[100%] min-h-screen bg-slate-200'>
          <Login />
      </div>
    </>
  );
}
