'use client'

import React from 'react';
import Header from '../_components/header';
import Keyboard from '../_components/keyboard';
import ProgressionBar from '../_components/progression-bar';
import TextWindow from '../_components/text-window';

export default function Page() {
    return (
        <main className="h-screen dark:bg-darkRed flex flex-col">
            <Header />
            <div className="flex justify-center items-center flex-row grow relative">
                <div className="flex flex-col items-center">
                    <Keyboard />
                    <TextWindow />
                </div>
                <div className="">
                    <ProgressionBar />
                </div>
            </div>
        </main>
    );
}
