import { Link, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search) {
      navigate(`/search?q=${search}`)
    } 
  }, [search])

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <header className='z-10 opacity-80 flex items-center justify-between bg-black fixed w-full h-16 lg:px-12 md:px-8 px-4'>
      <Link to="/">
        <h2 className="text-white text-3xl font-bold">MOVIES DB</h2>
      </Link>
      <form className='rounded border border-white p-1 flex gap-2 items-center' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search movie' onChange={handleSearchInput} className='outline-none bg-black text-white px-2 py-1' />
        <button type="submit">
          <CiSearch className='text-white w-6 h-6 hover:cursor-pointer hover:stroke-1' />
        </button>
      </form>
    </header>
  )
}

export default Header