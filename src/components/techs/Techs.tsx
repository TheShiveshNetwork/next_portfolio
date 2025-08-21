import { techs } from './constants';
import DotPattern from '../ui/dot-pattern';
import IconCloud from '../ui/icon-cloud';
import { MagicCard } from '../ui/magic-card';

const TechTag = ({
    gradientColor,
    title,
}: {
    gradientColor: string;
    title: string;
}) => {
    return (
        <MagicCard
            className="flex w-fit items-center justify-center px-2.5 py-2 bg-secondary/50 rounded-md text-primary/60 border-l-2 border-t-2 border-b border-r border-primary/10 shadow-md shadow-secondary/50"
            gradientColor={gradientColor}
            gradientOpacity={0.25}
        >
            <p className="font-Silkscreen text-sm text-whiteice">{title}</p>
        </MagicCard>
    );
};

export const TechSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden py-14">
            <div className="relative flex flex-col max-w-4xl w-full px-6 md:px-0">
                <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                        Stack
                    </div>
                    <p className='max-w-2xl text-secondary-foreground/60'>
                        I like to build new projects which include a variety of tech stack from web to app, from frontend to backend and devops. I like to learn new stacks while building.
                    </p>
                </div>
                <div className="flex flex-col flex-wrap items-center justify-center gap-8">
                    <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                            <TechTag
                                key={tech.label}
                                title={tech.label}
                                gradientColor={tech.bgColor}
                            />
                        ))}
                    </div>

                    <div>
                        <IconCloud iconSlugs={techs.map((tech) => tech.label)} />
                    </div>
                </div>
            </div>

            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className="dot-pattern bottom-0 opacity-50"
            />
        </section>
    );
};
