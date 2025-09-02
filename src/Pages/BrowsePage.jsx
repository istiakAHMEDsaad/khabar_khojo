import React from 'react';

const BrowsePage = () => {
  return (
    <section>
      {/* contianer */}
      <div>
        <div className='flex flex-col border-e border-gray-100 bg-white dark:bg-neutral-950'>
          <div className='px-4 py-6'>
            {/* list all items */}
            <ul className='mt-6 space-y-1'>
              {/* list 1 search */}
              <li>
                <label htmlFor='Search'>
                  <span className='text-sm font-medium text-gray-700'>
                    {' '}
                    Search{' '}
                  </span>

                  <div className='relative'>
                    <input
                      type='text'
                      id='Search'
                      className='mt-0.5 w-full rounded border border-gray-300 pe-10 shadow-sm sm:text-sm h-8 pl-2'
                    />

                    <span className='absolute inset-y-0 right-2 grid w-8 place-content-center'>
                      <button
                        type='button'
                        aria-label='Submit'
                        className='rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='size-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </label>
              </li>

              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                    <span className='text-sm font-medium'> Teams </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='size-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className='mt-2 space-y-1 px-4'>
                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Banned Users
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Calendar
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <a
                  href='#'
                  className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                >
                  Billing
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                >
                  Invoices
                </a>
              </li>

              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                    <span className='text-sm font-medium'> Account </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='size-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className='mt-2 space-y-1 px-4'>
                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Details
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Security
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowsePage;
