import { useEffect, useState } from "react";
import axios from "axios";

export const Skills = () => {
  const [languages, setLanguages] = useState([]);
  console.log(languages);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Yuma9rimoto/repos")
      .then((response) => {
        const languages = response.data.map((res) => res.language);
        const countedLanguages = generateLanguageCountObj(languages);
        setLanguages(countedLanguages);
      });
  }, []);

  const generateLanguageCountObj = (allLanguageList) => {
    const notNullLanguageList = allLanguageList.filter(
      (language) => language != null
    );
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    return uniqueLanguageList.map((item) => {
      return {
        language: item,
        count: allLanguageList.filter((language) => language === item).length,
      };
    });
  };
  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container"></div>
      </div>
    </div>
  );
};
