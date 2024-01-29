'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css'


export default function Home() {

  const { push } = useRouter();

  useEffect(() => {
    push('/uk');
  }, []);

  return (<p></p>);
}
