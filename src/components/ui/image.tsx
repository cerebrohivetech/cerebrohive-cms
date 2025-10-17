export function Image({src, alt, className, ...props}: {src: string, alt: string} & React.ImgHTMLAttributes<HTMLImageElement>) {

    return (
        <div className={className}>
            <img 
                src={src} 
                alt={alt}  
                className="w-full h-full object-cover" 
                loading="lazy"
                {...props}
            />
        </div>
    )
}