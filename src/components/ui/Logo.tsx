interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <img
            src="/images/logo.png"
            alt="Dogan Septem Interijeri"
            className={className}
            style={{ height: '52px', width: 'auto' }}
        />
    );
}
