import React from 'react'

const Footer = () => {
  return (
    <div className="relative isolate px-6 md:pt-0 lg:pt-0 pt-14 lg:px-8">
        <footer className="p-4  md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-1xl font-semibold text-gray-900 dark:text-white">    
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                    <span className='ml-2'>CashFlowMate</span>
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">Achieve Financial Wellness & Transform Your Spending Habits, Transform Your Life.</p>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{new Date().getFullYear()} <a href="#" className="hover:underline">CashFlowMate</a>.</span>
            </div>
        </footer>
    </div>
  )
}

export default Footer