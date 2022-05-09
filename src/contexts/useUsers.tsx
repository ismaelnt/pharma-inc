import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import axios from 'axios';

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextData {
  users: any[];
  page: number;
  getUsers: () => Promise<void>;
  loadMore: () => Promise<void>;
}

export const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {
  const baseUrl = 'https://randomuser.me/api/';
  const [users, setUsers] = useState<any>([]);
  const [page, setPage] = useState(0);

  async function getUsers() {
    try {
      const response = await axios.get(`${baseUrl}?results=6&page=${page}`);
      setUsers((users: any) => [...users, ...response.data.results]);
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  }

  async function loadMore() {
    setPage((page) => page + 1);
  }

  return (
    <UsersContext.Provider value={{ users, getUsers, loadMore, page }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
