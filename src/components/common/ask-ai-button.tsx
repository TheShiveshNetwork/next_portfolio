import { useState } from 'react';
import { MessageCircle, ChevronDown, ExternalLink } from 'lucide-react';
import { SITE_INFO } from '@/configs/site';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '../ui/button';

interface AIService {
    name: string;
    url: string;
    color?: string;
}

interface AskAIButtonProps {
    websiteUrl?: string;
    questions?: string;
    className?: string;
}

export const AskAIButton = ({
    websiteUrl = `${SITE_INFO.url}/llms.txt`,
    questions = "Explain this website in brief?",
    className,
}: AskAIButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const aiServices: AIService[] = [
        {
            name: 'Perplexity',
            url: 'https://www.perplexity.ai',
            color: 'text-purple-600'
        },
        {
            name: 'ChatGPT',
            url: 'https://chatgpt.com',
            color: 'text-green-600'
        },
        {
            name: 'Claude',
            url: 'https://claude.ai',
            color: 'text-orange-600'
        },
        {
            name: 'T3 Chat',
            url: 'https://t3.chat',
            color: 'text-orange-600'
        },
    ];

    const generatePrompt = () => {
        return `Read the website ${websiteUrl} and answer the following questions:\n\n${questions}`;
    };

    const openAI = (aiService: AIService) => {
        const prompt = generatePrompt();
        const encodedPrompt = encodeURIComponent(prompt);

        if (aiService.name === 'ChatGPT') {
            window.open(`${aiService.url}/?hints=search&q=${encodedPrompt}`, '_blank');
        } else if (aiService.name === 'Perplexity') {
            window.open(`${aiService.url}/?q=${encodedPrompt}`, '_blank');
        } else {
            window.open(`${aiService.url}/new?q=${encodedPrompt}`, '_blank');
        }

        setIsOpen(false);
    };

    return (
        <div className={cn("relative inline-block", className)}>
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                        <MessageCircle className="w-4 h-4" />
                        Ask AI
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {aiServices.map((service) => (
                        <DropdownMenuItem
                            key={service.name}
                            onClick={() => openAI(service)}
                            className="cursor-pointer flex items-center justify-between"
                        >
                            {service.name}
                            <ExternalLink className="w-3 h-3" />
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
                {/* <>
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsOpen(false)}
                        />
                        <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                            <div className="py-1">
                                {aiServices.map((service) => (
                                    <button
                                        key={service.name}
                                        onClick={() => openAI(service)}
                                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        <span className={`font-medium ${service.color}`}>
                                            {service.name}
                                        </span>
                                        <ExternalLink className="w-3 h-3 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
                                <div className="text-xs text-gray-500 mb-1">Prompt preview:</div>
                                <div className="text-xs text-gray-600 font-mono bg-white border border-gray-200 rounded px-2 py-1 max-h-20 overflow-y-auto">
                                    {generatePrompt()}
                                </div>
                            </div>
                        </div>
                    </> */}
            </DropdownMenu>
        </div>
    );
};