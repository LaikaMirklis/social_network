import './select-lang.scss';
import { LOCALS } from '../../../i18n/constants';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const options = [
    {
        label: 'Укр',
        value: LOCALS.UK,
    },
    {
        label: 'Eng',
        value: LOCALS.EN,
    },
];

const LangChange = () => {
    const { i18n } = useTranslation()

    return (
        <Select
            classNamePrefix='langChange'
            value={options.find((option) => option.value === i18n.resolvedLanguage)}
            options={options}
            onChange={(choice) => i18n.changeLanguage(choice.value)}
            isSearchable={false}
            blurInputOnSelect={true}
        />
    );
};

export default LangChange;