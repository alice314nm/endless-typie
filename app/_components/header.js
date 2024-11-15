import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className="bg-gray-100 py-4 mb-5">
            <ul className="flex items-center justify-between mx-auto max-w-6xl px-4">
                {/* App */}
                <div className="flex-shrink-0">
                    <Link href="./">
                        <p>Endless Typie</p>
                    </Link>
                </div>

                {/* Middle Links */}
                <div className="flex space-x-36">
                    <Link href="./lessons/"><li className="cursor-pointer">lessons</li></Link>
                    <Link href="./practice/"><li className="cursor-pointer">practice</li></Link>
                    <Link href="./analytics/"><li className="cursor-pointer">analytics</li></Link>
                </div>

                {/* Right Link */}
                <div className="flex">
                    <Link href="/"><li className="cursor-pointer">user</li></Link>
                </div>
            </ul>
        </header>
    );
}
