import Link from "next/link"
import { languageIcon } from "../utils/language-icons";
import Image from "next/image";
import SocialMedia from "@/utils/social-media";


const getIcon = (language: string) => {
    if(language === null){
        return `/icon/github.png` 
    }
  const found = languageIcon.find(([lang]) => lang === language);
  return found ? `/icon/${found[1]}` : null;
};

const CardRepos = ({ name, url, language }: { name: string, url: string,language:string }) => {
    const iconSrc = getIcon(language);
  return (
    <div
      className="group bg-gray-100 border border-gray-200 rounded-xl flex items-center p-3 overflow-hidden"
    >
      <Link href={url}
      target="_blank"
      rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 rounded-xl p-2 flex justify-center items-center transform transition-transform duration-300 group-hover:translate-x-[215px] cursor-pointer">
        {iconSrc ? (<div className="w-8 h-8 rounded-sm bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${iconSrc})` }}>
        </div>):(
        <div className="w-8 h-8 rounded-sm bg-contain bg-no-repeat bg-center">
            {language   }
        </div>
        )}
      </Link>

      <div className="ml-2 transition-opacity duration-300 group-hover:opacity-0 whitespace-normal break-words">
        {name}
      </div>
      
      <div className="flex absolute space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <SocialMedia/>
      </div>

       
    </div>
  )
}

export default CardRepos;
