'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ 
    className, 
    hideOnMobile = false,
    responsive = true 
}: { 
    className?: string, 
    hideOnMobile?: boolean,
    responsive?: boolean 
}) => {
    return (
        <div className={cn("flex items-center", hideOnMobile && "hidden sm:flex")}>
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={336}
                height={140}
                className={cn(
                    'mr-2 w-auto h-auto', 
                    responsive ? 'max-h-[40px] sm:max-h-[80px] md:max-h-[100px] lg:max-h-[120px] xl:max-h-[140px]' : 'max-h-[140px]',
                    className
                )}
                priority
            />
        </div>
    )
}

// Simplified logo for very small screens or compact layouts
export const LogoCompact = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center">
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={200}
                height={200}
                className={cn(
                    'mr-1 w-auto h-auto max-h-[64px]',
                    className
                )}
                priority
            />
        </div>
    )
}

// Homepage-specific logo for mobile that's 15% larger
export const HomepageLogoCompact = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center">
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={230}
                height={230}
                className={cn(
                    'mr-1 w-auto h-auto max-h-[73.6px]', // 64px * 1.15 = 73.6px
                    className
                )}
                priority
            />
        </div>
    )
}

export const LogoStroke = ({ 
    className, 
    hideOnMobile = false,
    responsive = true 
}: { 
    className?: string, 
    hideOnMobile?: boolean,
    responsive?: boolean 
}) => {
    return (
        <div className={cn("flex items-center", hideOnMobile && "hidden sm:flex")}>
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={336}
                height={140}
                className={cn(
                    'mr-2 w-auto h-auto', 
                    responsive ? 'max-h-[40px] sm:max-h-[80px] md:max-h-[100px] lg:max-h-[120px] xl:max-h-[140px]' : 'max-h-[140px]',
                    className
                )}
                priority
            />
        </div>
    )
}
