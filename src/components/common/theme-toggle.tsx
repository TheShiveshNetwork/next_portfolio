"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant={"outline"}
            className='rounded-full h-10 w-10 cursor-pointer'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
    )
}
