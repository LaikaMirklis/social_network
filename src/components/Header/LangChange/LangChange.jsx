import i18next from "i18next";
import { LOCALS } from "../../../i18n/constants";
import Select from "react-select";
import "./select-lang.scss"

const LangChange = (props) => {
    const langChange = (choice) => {
        i18next.changeLanguage(choice.value)
    }

    const options = [
        {
            label: "Ukr",
            value: LOCALS.UKR
        },
        {
            label: "Eng",
            value: LOCALS.ENG
        },
    ];

    return (
        <Select
            classNamePrefix='langChange'
            value={
                options.filter(option =>
                    option.value === i18next.language)
            }
            options={options}
            onChange={langChange}
            isSearchable={false}
        />
    )
}

export default LangChange;