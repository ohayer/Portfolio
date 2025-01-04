import GitHubSvg from "../assets/svg/GitHub";
import LinkedInSvg from "../assets/svg/LinkedIn";
import MailSvg from "../assets/svg/Mail";
import PhoneSvg from "../assets/svg/Phone";

const data = {
  name: "Oliwier Kurkowski",
  linkedin: "https://www.linkedin.com/in/oliwier-kurkowski-648528273/",
  phone: "+48 517 818 677",
  github: "https://github.com/ohayer",
  mail: "oliwier.kurkowski@ohayer.com"
}

const Footer = () => {
  return (
    <footer className="text-white mt-20 sm:px-12 lg:px-64 text-center scale-60 sm:scale-100" id="footer">
      <div className="relative">
        {/* Linie w lewym górnym rogu */}
        <div className="absolute top-0 left-0 w-6 sm:w-12 h-1 bg-white"></div>
        <div className="absolute top-0 left-0 h-6 w-1 sm:h-12 bg-white"></div>
        <p className="text-2xl mb-4 font-semibold">Skontaktuj się ze mną:</p>

        <div className="flex flex-col items-center space-y-6">
          {/* Sekcja LinkedIn i Telefon */}
          <div className="flex  items-center  flex-row space-y-0 space-x-8">
            <a
              href={data.linkedin}
              className="hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInSvg />
            </a>
            <div className="flex items-center space-x-2">
              <PhoneSvg />
              <p>{data.phone}</p>
            </div>
          </div>

          {/* Sekcja GitHub i Mail */}
          <div className="flex  items-center flex-row space-y-0 space-x-8">
            <a
              href={data.github}
              className="hover:text-gray-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-lg ml-24">
                <GitHubSvg />
              </div>
            </a>
            <div className="flex items-center space-x-2">
              <a href={`mailto:${data.mail}`}><MailSvg /></a>
              <p>{data.mail}</p>
            </div>
          </div>
        </div>

        {/* Sekcja praw autorskich */}
        <p className="mt-8 text-sm text-gray-400">&copy; {new Date().getFullYear()} {data.name}. Wszelkie prawa zastrzeżone.</p>

        {/* Linie w prawym dolnym rogu */}
        <div className="absolute bottom-0 right-0 w-6 sm:w-12 h-1 bg-white"></div>
        <div className="absolute bottom-0 right-0 h-6 w-1 sm:h-12 bg-white"></div>
      </div>
    </footer>
  );
};

export default Footer;
