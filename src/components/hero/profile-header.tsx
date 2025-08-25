"use client";

import { AskAIButton } from "../common/ask-ai-button";
import { FlipWords } from "../common/flip-words";
import DotPattern from "../ui/dot-pattern";

export function ProfileHeader() {
    return (
        <div className="w-full mt-14 relative h-[254px]">
            <div className="mx-auto max-w-4xl w-full h-full px-4 md:px-0 flex items-center justify-center relative">
                <div className="text-6xl md:text-8xl">
                    <FlipWords word="I build Software" className="text-wrap font-borel" />
                </div>
                <AskAIButton className="absolute top-0 right-0" />
            </div>
            <DotPattern
                width={20}
                height={20}
                className="w-full h-full absolute top-0 left-0"
            />
        </div>
    )
}
