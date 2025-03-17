import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center">
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={168}
                height={70}
                className={cn('mr-2', className)}
            />
        </div>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center">
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={168}
                height={70}
                className={cn('mr-2', className)}
            />
        </div>
    )
}
