'use client';
import { useActiveUsers } from '../hooks/useActiveUsers';

export default function ActiveUsersBadge() {
    const count = useActiveUsers();

    return (
        <div className='flex justify-center w-full'>
            <div className="flex items-center gap-2 bg-white border border-gray-200
                    rounded-full px-4 py-2 shadow-sm w-fit">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute h-full w-full
                         rounded-full bg-green-400 opacity-75" />
                    <span className="relative h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-medium text-gray-700">
                    <span className="text-green-600 font-bold">{count}</span>
                    {' '}{count === 1 ? 'user' : 'users'} online
                </span>
            </div>
        </div>

    );
}