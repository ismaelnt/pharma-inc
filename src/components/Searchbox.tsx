import { MagnifyingGlass } from 'phosphor-react';

export function Searchbox() {
  return (
    <label className='relative block w-full my-6 text-black'>
      <button className='absolute inset-y-0 right-0 flex items-center pr-4'>
        <MagnifyingGlass className='text-slate-500 text-lg' />
      </button>
      <input
        className='placeholder:text-slate-500 placeholder:text-lg block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm'
        placeholder='Searching'
        type='text'
        name='search'
      />
    </label>
  );
}
