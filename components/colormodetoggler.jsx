import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { useShortcuts } from 'react-shortcuts-hook'

function ColorModeToggler({ toggle }) {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true)
  useShortcuts(['shift', 'R'], () => setDarkMode(!darkMode), [darkMode])

  useEffect(() => {
    const body = document.body
    if (darkMode) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <>
      <div className='mt-5 mr-10 font-size-12 hidden-sm-and-down text-muted'>
        <kbd className='text-muted'>shift</kbd> + <kbd className='text-muted'>R</kbd>
      </div>
      <button
        className='btn btn-action'
        type='button'
        onClick={() => setDarkMode(!darkMode)}
        title='Toggle color mode'
      >
        <div className='hidden-dm'>
          <svg
            className='w-6 h-6 svg-button'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          </svg>
          <span className='sr-only'>Toggle dark mode</span>
        </div>
        <div className='hidden-lm'>
          <svg
            className='w-6 h-6 svg-button'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
          <span className='sr-only'>Toggle light mode</span>
        </div>
      </button>
    </>
  )
}

export default ColorModeToggler
