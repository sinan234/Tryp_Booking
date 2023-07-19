"use client";
import Users from './components/Main'
import Sidebar from './components/Sidebar';

export default function Home({ users }) {
  return (
    <div className='flex'>
      <Sidebar />
      <Users />
    </div>

  );
}