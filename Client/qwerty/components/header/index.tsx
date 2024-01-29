import Link from "next/link";
import { useRouter } from 'next/router';
import style from './header.module.css'

const Header = () => {

  const router = useRouter();
  const currentPath = router.pathname;
  

  return (
    <ul className={style.container}>
      <li className={currentPath === '/uk' ? style.active : ''} ><Link href='/uk'>UK</Link></li>
      <li className={currentPath === '/ka' ? style.active : ''} ><Link href='/ka' >KA</Link></li>
      <li className={currentPath === '/en' ? style.active : ''} ><Link href='/en' >EN</Link></li>
    </ul>
  );
}

export default Header;