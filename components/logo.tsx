import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className, hideOnMobile = false }: { className?: string, hideOnMobile?: boolean }) => {
    return (
        <div className={cn("flex items-center", hideOnMobile && "hidden sm:flex")}>
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={336}
                height={140}
                className={cn('mr-2 w-auto h-auto', 
                    'max-h-[80px] sm:max-h-[100px] md:max-h-[120px] lg:max-h-[140px]', 
                    className
                )}
                priority
            />
        </div>
    )
}

export const LogoStroke = ({ className, hideOnMobile = false }: { className?: string, hideOnMobile?: boolean }) => {
    return (
        <div className={cn("flex items-center", hideOnMobile && "hidden sm:flex")}>
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={336}
                height={140}
                className={cn('mr-2 w-auto h-auto', 
                    'max-h-[80px] sm:max-h-[100px] md:max-h-[120px] lg:max-h-[140px]', 
                    className
                )}
                priority
            />
        </div>
    )
}
