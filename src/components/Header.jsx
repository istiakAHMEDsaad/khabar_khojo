import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';

const Header = () => {
  return (
    <header>
      <div className='navbar bg-base-100 dark:bg-neutral-950 shadow-sm font-sans'>
        {/* navbar start */}
        <div className='navbar-start'>
          {/* Mobile Devices */}
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Browse</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost text-xl'>Khabar Khojo</a>
        </div>

        {/* navbar center medium devices */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-2'>
            <li>
              <Button variant={''}>
                <a>Home</a>
              </Button>
            </li>
            <li>
              <Button variant={'secondary'}>
                <a>Browse</a>
              </Button>
            </li>
            <li>
              <Button variant={'secondary'}>
                <a>About</a>
              </Button>
            </li>
          </ul>
        </div>

        {/* navbar end */}
        <div className='navbar-end'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
