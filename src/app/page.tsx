import { redirect } from "next/navigation";

import { DefaultSpinner } from '../../components/Loaders';

const AUTH_URL = "https://stint-writer-auth.vercel.app/"

export default function Home() {

  redirect(AUTH_URL);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
      <span className='text-xl font-bold pb-8'>Sending you to the login page...</span>
      <div className='w-24 h-24'>
        <DefaultSpinner />
      </div>

    </main>
  )
}
