import { UserButton } from '@clerk/nextjs'
import React from 'react'

interface DashboardPageProps {
    params : {userId: string}
}

const DashboardPage: React.FC<DashboardPageProps> = async ({params}) => {
  
  return (
    <div>Active active {params.userId}
    <UserButton />
    </div>
  )
}

export default DashboardPage