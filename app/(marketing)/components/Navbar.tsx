import { SignInButton, SignedOut, UserButton, auth, currentUser } from '@clerk/nextjs'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = async () => {
  const { userId } = auth();
  const user = await currentUser()
  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
              </a>
          </div>
          <div className="justify-end">
          {
            user ? 
            <div className='flex'>
              <a href={`/${userId}`} className="mr-4">Dashboard</a>
              <UserButton />
            </div>
            
            : <SignInButton/>
          }
          </div>
        </nav>
    </header>
  )
}

export default Navbar