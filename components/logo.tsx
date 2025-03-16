import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center">
            <Image 
                src="/images/7EC73928-7875-4306-A35E-328C263A269F.png" 
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
                src="/images/7EC73928-7875-4306-A35E-328C263A269F.png" 
                alt="Carbo Software Logo" 
                width={168}
                height={70}
                className={cn('mr-2', className)}
            />
        </div>
    )
}
