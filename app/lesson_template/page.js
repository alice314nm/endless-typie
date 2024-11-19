'use client'

import React from 'react';
import Header from '../_components/header';
import Keyboard from '../_components/keyboard';
import ProgressionBar from '../_components/progression-bar';
import TextWindow from '../_components/text-window';

export default function LessonPage(){
    return(
        <main className="h-screen dark:bg-[#130000]">
            <Header/>
            <Keyboard/>
            <ProgressionBar/>
            <TextWindow/>
        </main>
    );
}