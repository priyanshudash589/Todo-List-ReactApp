import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[55px] bg-slate-950 bottom-0 text-white flex items-center justify-center'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='#'>
          Priyanshu Dash
        </a>
      </div>
    </div>
  )
}

export default Footer