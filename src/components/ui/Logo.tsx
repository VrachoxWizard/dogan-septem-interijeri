interface LogoProps {
    className?: string;
    size?: 'navbar' | 'footer';
}

export function Logo({ className, size = 'navbar' }: LogoProps) {
    const height = size === 'navbar' ? '110px' : '120px';

    return (
        <img
            src="/images/logo.png"
            alt="Dogan Septem Interijeri"
            className={className}
            style={{ height, width: 'auto' }}
        />
    );
}
