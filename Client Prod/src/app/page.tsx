'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout  from '../../src/app/layout';

export default function Home() {

  const { push } = useRouter();

  useEffect(() => {
    push('/ru');
  }, []);

  return (<p></p>);
}
