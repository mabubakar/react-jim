import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav
        className={
          (props.transparent
            ? 'top-0 absolute z-50 w-full'
            : 'relative shadow-lg bg-white shadow-lg') +
          ' flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'
        }
      >
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              className={
                (props.transparent ? 'text-white' : 'text-gray-800') +
                ' text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase'
              }
              to='https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation'
            >
              The Power Room
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? 'text-white' : 'text-gray-800') +
                  ' fas fa-bars'
                }
              ></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              {/* Facebook Icon */}
              <li className='flex items-center'>
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to='#pablo'
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-orange-300 text-orange-500'
                        : 'text-orange-500') +
                      ' fab fa-facebook text-lg leading-lg '
                    }
                  />
                  <span className='lg:hidden inline-block ml-2'>Facebook</span>
                </Link>
              </li>
              {/* Twitter Icon */}
              <li className='flex items-center'>
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to='#pablo'
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-orange-300 text-orange-500'
                        : 'text-orange-500') +
                      ' fab fa-twitter text-lg leading-lg '
                    }
                  />
                  <span className='lg:hidden inline-block ml-2'>Tweeter</span>
                </Link>
              </li>

              {/* Instagram Icon */}
              <li className='flex items-center'>
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to='#pablo'
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-orange-300 text-orange-500'
                        : 'text-orange-500') +
                      ' fab fa-instagram text-lg leading-lg '
                    }
                  />
                  <span className='lg:hidden inline-block ml-2'>Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
