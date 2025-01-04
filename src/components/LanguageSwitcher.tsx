import { useTranslation } from "react-i18next";

const LangugageSwitcher = () => {
    const { i18n } = useTranslation();


    return (
        <div>
            <label htmlFor="toggle" className="text-white pr-2" style={i18n.language === "en" ? { color: '#3b82f6' } : {color: "#53565D" }}>EN</label>
            <input type="checkbox" 
                className="toggle border-indigo-600 bg-blue-500 checked:bg-green-500 checked:border-green-600 -mb-1"
                onChange={() => i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')}
            />
            <label htmlFor="toggle" className="text-white pl-2" style={i18n.language === "pl" ? { color: '#22c55e' } : {color: "#53565D" }}>PL</label>
        </div>
    );
}
export default LangugageSwitcher;