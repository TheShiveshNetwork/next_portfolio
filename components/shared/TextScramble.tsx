"use client"

import React, { useState, useEffect } from 'react'


const symbols: string[] = 'abcdefghijklmnopqrstuvwxyz?<>!'.split('')

type ScrambleText = string;
export type ScrambleTexts = ScrambleText[];

type TextScrambleProps = {
    texts: ScrambleTexts
    className?: string
    letterSpeed?: number
    nextLetterSpeed?: number
    paused?: boolean
    pauseTime?: number
}

const randomItem = (array: Array<any>) => array[Math.floor(Math.random() * array.length)]

const nextItem = (array: Array<any>, currentItem: any) => {
    const currentIndex = array.indexOf(currentItem)
    const bound = array.length
    const nextIndex = (currentIndex + bound + 1) % bound
    return array[nextIndex]
}

const TextScramble: React.FC<TextScrambleProps> = ({
    texts,
    className,
    letterSpeed = 100,
    nextLetterSpeed = 100,
    paused = false,
    pauseTime = 1500,
}) => {
    const [currentText, setCurrentText] = useState<string>(texts[0]);
    const [isClient, setIsClient] = useState(false);

    const [scrambling, setScrambling] = useState(false);

    const initSymbols: string[] = Array(currentText.length)
        .fill(0)
        .map(() => randomItem(symbols))

    const [displayedText, setDisplayedText] = useState<string[]>(initSymbols)

    const leftIndexes: number[] = []

    const defaultLeftIndexes = (): void => {
        currentText.split('').forEach((_, i) => {
            leftIndexes.push(i)
        })
    }

    let bakeLetterInterval: any = 0
    let bakeTextInterval: any = 0

    const bakeLetter = () => {
        bakeLetterInterval = setInterval(() => {
            if (!paused) {
                const updatedText: string[] = []

                currentText.split('').forEach((_, i) => {
                    if (!leftIndexes.includes(i)) {
                        updatedText[i] = currentText[i]
                        return
                    }

                    const randomSymbol = randomItem(symbols)
                    updatedText[i] = randomSymbol
                })

                setDisplayedText(updatedText)
            }
        }, letterSpeed)
    }

    const bakeText = () => {
        defaultLeftIndexes()
        bakeLetter()

        bakeTextInterval = setInterval(() => {
            if (!paused) {
                if (leftIndexes.length === 0) {
                    setScrambling(true)
                    clearInterval(bakeLetterInterval)
                    clearInterval(bakeTextInterval)

                    setTimeout(() => {
                        setCurrentText(nextItem(texts, currentText))
                        defaultLeftIndexes()

                        setScrambling(false)
                    }, pauseTime)
                }

                leftIndexes.shift()
            }
        }, nextLetterSpeed)
    }

    useEffect(() => {
        setIsClient(true);
        if (!paused) bakeText()
    }, [currentText, paused])

    return (
        <div className={`${className} transition-all`}>
            {displayedText}
        </div>
    )
}

export default TextScramble