'use client';

import React, { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Footer() {
  
  return (
    <footer className="w-screen fixed bottom-0 dark:text-[#FFD6D6]">
      <p className="text-right pr-5">Created by <Link href="https://github.com/alice314nm"><span className="text-sky-500 underline cursor-pointer">alice314nm</span></Link></p>
    </footer>
  );
}
