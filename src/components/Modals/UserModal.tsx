import { Dispatch, SetStateAction } from 'react';

import { Dialog } from '@headlessui/react';

import { useUsers } from '../../contexts/useUsers';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  user: (userId: string) => void;
}

export function UserModal({ isOpen, setIsOpen }: ModalProps) {
  const { user } = useUsers();

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='relative z-50'
    >
      <div className='fixed inset-0 flex flex-col items-center justify-center bg-white/10'>
        <Dialog.Panel className='w-full max-w-sm rounded bg-gray-900 p-4'>
          <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-slate-500 text-xl text-white uppercase">
          </div>
          <p className='flex flex-col'>{user?.gender}</p>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
