import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center">
            <Image 
                src="/images/carbo logo.svg" 
                alt="Carbo Software Logo" 
                width={100}
                height={42}
                className={cn('w-auto h-auto max-w-[90px] sm:max-w-[95px] md:max-w-[100px]', className)}
                priority
                style={{ objectFit: 'contain' }}
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
                width={100}
                height={42}
                className={cn('w-auto h-auto max-w-[90px] sm:max-w-[95px] md:max-w-[100px]', className)}
                priority
                style={{ objectFit: 'contain' }}
            />
        </div>
    )
}
