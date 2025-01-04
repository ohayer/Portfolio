import IconWidget from "../components/IconWidget";
import { useTranslation } from 'react-i18next'

const MainContent = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='flex flex-col sm:px-10 px-5 pt-32 xl:flex-row align sm:items-start items-center'>
                <div>
                    <h1 className="text-6xl font-bold lg:text-8xl sm:text-7xl ">Oliwier Kurkowski</h1>
                    <h2 className="text-2xl font-normal italic ml-5 lg:text-4xl sm:text-3xl stretched_text" style={{ whiteSpace: 'pre-line' }}>{t('occupation')}</h2>
                </div>
                <div className="flex-none w-[588px] ml-0 2xl:ml-44 xl:ml-16 lg:ml-44 md:ml-20 sm:mt-2 scale-50 2xl:scale-100 xl:scale-90 lg:scale-85 md:scale-75 sm:scale-60">
                    <IconWidget />
                </div>
            </div>
        </>
    );
}

export default MainContent; 