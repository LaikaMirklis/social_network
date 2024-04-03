import React, { useState } from "react";
import i18next from "i18next";
import { LOCALS } from "../../../i18n/constants";
import Select from "react-select";
import "./select-lang.scss";

const LangChange = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

    const langChange = (choice) => {
        i18next.changeLanguage(choice.value);
        setSelectedLanguage(choice.value);
    };

    const options = [
        {
            label: "Ukr",
            value: LOCALS.UKR,
        },
        {
            label: "Eng",
            value: LOCALS.ENG,
        },
    ];

    return (
        <Select
            classNamePrefix="langChange"
            value={options.find((option) => option.value === selectedLanguage)}
            options={options}
            onChange={langChange}
            isSearchable={false}
            blurInputOnSelect={true}
        />
    );
};

export default LangChange;