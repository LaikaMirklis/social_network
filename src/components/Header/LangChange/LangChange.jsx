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



        // const customStyles= {
        //     control: (styles, state)=>({
  
        //   
        //        
        //         // border: state.isFocused ? '' : "none",
        //         boxShadow: state.isFocused ? null : null,
        //         // borderRadius: state.isFocused ? ' ' : '8px',
        //         "&:hover": {
        //             border: '2px solid #382a2e',
        //         }
    
        //     }),
        // option: (styles, state)=>({
    
        //     ...styles,
        //     backgroundColor: state.isSelected ? "#382a2e" : "",
        //     color: state.isSelected ? "#ece0c9" : "",
        //     "&:hover": {
        //         borderColor: "none",
        //     }
    
        // }),

        // menuList: styles=>({
   
        //     // border: 'solid #382a2e',
        //     // borderWidth: '0 2px  2px 2px  ',
        //     // borderRadius: '0 0 8px 8px',
