import { Header } from './components/Header';

import { CircleNotch, MagnifyingGlass } from 'phosphor-react';

export function App() {
  return (
    <>
      <div>
        <Header />
        <div className='mt-20 flex flex-col items-center mx-auto max-w-3xl px-6'>

          <p className='text-justify text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc at tortor blandit nisi pellentesque molestie eget ut odio.
            Maecenas auctor dapibus lacus non iaculis.
          </p>

          <label className='relative block w-full my-6 text-black'>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <MagnifyingGlass className='text-slate-500 text-lg' />
            </span>
            <input
              className='placeholder:text-slate-500 placeholder:text-lg block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm'
              placeholder='Searching'
              type='text'
              name='search'
            />
          </label>

          <div className='relative overflow-x-auto shadow-md sm:rounded-md w-full'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr className='text-center'>
                  <th className='py-4'>Name</th>
                  <th>Gender</th>
                  <th>Birth</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center'>
                  <td className='py-2 text-zinc-100'>Ismael Alves</td>
                  <td>Masculino</td>
                  <td>18/01/1997</td>
                  <td>
                    <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className='mt-10 bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 flex items-center'>
            Loading more...
            <CircleNotch size={24} className='ml-4 animate-spin' />
          </button>

        </div>
      </div>
    </>
  );
}
