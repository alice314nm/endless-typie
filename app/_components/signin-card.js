import React from 'react';
import { useUserAuth } from '../_utils/auth-context';
import Link from 'next/link';

export default function SignInCard({ title, type }) {
    const { user, firebaseSignOut } = useUserAuth();


    return (
      <div className="mt-16 flex items-center justify-center">
      <div className="bg-lightestGreen rounded-lg p-4 dark:bg-red w-80 text-center flex flex-col gap-2 items-center">
        <p>{title}</p>
        
        {
            type ? (
                <Link className="text-sky-500 underline" href="./signin">Go to sign-in page</Link>

            ) : (
                <a onClick={firebaseSignOut} className="text-sky-500 underline">Sign out</a>
            )
        }
      </div>
    </div>
    );
  }