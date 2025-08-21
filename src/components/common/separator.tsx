import { cn } from "@/lib/utils";

type SeparatorProps = {
    className?: string;
};

export const Separator = ({
    className,
}: SeparatorProps) => {
    return (
        <div className={cn("w-full relative", className)}>
            <AngledLinesPattern spacing={5} className="h-10 border-primary border-t border-b" />
            <div className="absolute max-w-4xl w-full h-full left-1/2 opacity-10 -translate-x-1/2 top-0 border-primary border-l border-r" />
        </div>
    );
};

interface AngledLinesPatternProps {
    lineColor?: string;
    spacing?: number;
    className?: string;
}

export const AngledLinesPattern: React.FC<AngledLinesPatternProps> = ({
    lineColor = 'var(--color-primary)',
    spacing = 10,
    className,
}) => {
    return (
        <div className={cn("w-full relative overflow-hidden bg-transparent h-20 opacity-10", className)}>
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="diagonal-lines-light"
                        patternUnits="userSpaceOnUse"
                        width={spacing * Math.sqrt(2)}
                        height={spacing * Math.sqrt(2)}
                        patternTransform="rotate(45)"
                    >
                        <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2={spacing * Math.sqrt(2)}
                            stroke={lineColor}
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#diagonal-lines-light)"
                />
            </svg>
        </div>
    );
};
