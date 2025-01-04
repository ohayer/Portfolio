import { useEffect, useState } from 'react';
import LangugageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t } = useTranslation();
    const headerLinks = [
        {
            id: 1,
            title: t('header.home'),
            href: '#app'
        },
        {
            id: 2,
            title: t('header.about'),
            href: '#about_me'
        },
        {
            id: 3,
            title: t('header.projects'),
            href: '#projects'
        },
        {
            id: 4,
            title: t('header.contact'),
            href: '#footer'
        }
    ]

    // State for mobile menu

    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Control header visibility
    const [lastScrollPos, setLastScrollPos] = useState(0);

    // Funkcja do otwierania/zamykania menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const mediaQuery = window.matchMedia('(max-width: 639px)');
            if (mediaQuery.matches) return; // Don't run on small screens
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > lastScrollPos) {
                // User is scrolling down, hide the header
                setIsVisible(false);
            } else {
                // User is scrolling up, show the header
                setIsVisible(true);
            }

            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPos]);

    return (
        <header id='header' className={`sticky-header ${!isVisible ? 'hide-header' : ''}`}>
            <button
                onClick={toggleMenu}
                className="sm:hidden text-white focus:outline-none float-right mr-4 mt-4"
            >
                {isOpen ? (
                    <span className="blank-span"></span>
                ) : (
                    <span className="text-xl">&#9776;</span>
                )}
            </button>

            {/* Navigation links for large screens */}
            <nav className="hidden sm:flex font-medium justify-evenly sm:px-16 sm:text-lg md:text-xl md:px-24 lg:text-2xl lg:px-52">
                {headerLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        className={`${isOpen ? '' : 'hover:text-blue-500'} transition-colors`}
                    >
                        {link.title}
                    </a>
                ))}
                <LangugageSwitcher />
            </nav>

            {/* Modal menu for small screens */}
            {isOpen && (
                <div className="fixed inset-y-0 right-0 w-64 bg-customBlack text-white p-6 z-50">
                    <button
                        onClick={toggleMenu}
                        className="self-end text-3xl mb-8 focus:outline-none float-right"
                    >
                        &times;
                    </button>
                    <nav className="flex flex-col font-medium space-y-6 mt-16 text-xl">
                        {headerLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={toggleMenu}
                                className="text-white" // No hover effect on small screen
                            >
                                {link.title}
                            </a>
                        ))}
                        <LangugageSwitcher />
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
