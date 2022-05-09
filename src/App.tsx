import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { CircleNotch, MagnifyingGlass } from 'phosphor-react';

import { useUsers } from './contexts/useUsers';
import { Searchbox } from './components/Searchbox';

export function App() {
  const { users, getUsers, loadMore, page } = useUsers();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await getUsers();
      setIsLoading(false);
    }

    fetchData();
  }, [page])

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

          <Searchbox />

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
                {users.map((user) => (
                  <tr key={user.login.uuid} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center'>
                    <td className='py-2 text-zinc-100'>
                      {user.name.first} {user.name.last}
                    </td>
                    <td>{user.gender}</td>
                    <td>{user.registered.date}</td>
                    <td>
                      <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            className='my-10 bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 flex items-center'
            onClick={loadMore}
          >
            {!isLoading
              ? <p>Loading more...</p>
              : <CircleNotch size={24} className='animate-spin' />
            }
          </button>

        </div>
      </div>
    </>
  );
}
