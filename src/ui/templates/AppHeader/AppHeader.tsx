import * as React from 'react'

export const AppHeader = ({
  appName = 'RecipeUI',
  children
}: {
  /**
  The name of the app
  */
  appName?: string,
  children?: React.ReactNode[]
}) =>
  <header className='white-neutral-50 bg-dark-grey body-font' data-testid='AppHeader'>
    <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
      <a className='flex title-font font-medium items-center mb-4 md:mb-0' href={window.location.pathname}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' stroke-linecap='round' viewBox='0 0 24 24'
          stroke-linejoin='round' stroke-width='2' className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'>
          <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
        </svg>
        <span className='ml-3 text-xl text-neutral-50'>{appName}</span>
      </a>
      <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
        {/* <a className='mr-5 hover:text-white'>First Link</a>
          <a className='mr-5 hover:text-white'>Second Link</a>
          <a className='mr-5 hover:text-white'>Third Link</a>
          <a className='mr-5 hover:text-white'>Fourth Link</a> */}
      </nav>
      {children}
    </div>
  </header>
