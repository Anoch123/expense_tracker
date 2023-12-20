import { UserButton, auth } from '@clerk/nextjs'

const DashboardPage = async () => {
  const { userId } = auth();
  return (
    <div className="relative isolate px-6 lg:pt-0 md:pt-14 lg:px-8">
      <div className="flex">
        <div className="">
          <h2 className='text-xl font-semibold'>Banking Dashboard</h2>
          <span>hello Danushka</span>
        </div>
        <div className="flex-1 text-end">2023</div>
      </div>
    </div>
  )
}

export default DashboardPage