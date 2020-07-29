import LocalizedStrings from 'react-native-localization';

const appLocalization = new LocalizedStrings({
    'az': {
        appName: 'Gifty',
        nextButton: 'Irəli',
        doneButton:'Hazır',
        pickerTitle:'Şəhər',
        inputNamePlaceholder:'Adınız',
        inputSurnamePlaceholder:'Soyadınız',
        inputAddressPlaceholder:'Ünvan',
        question:'Sual',
        correctResult: 'Əla!',
        wrongResult: 'Səhv!'
    },
    'en': {
        appName: 'Gifty',
        nextButton: 'Next',
        doneButton:'Done',
        pickerTitle:'City',
        inputNamePlaceholder:'Name',
        inputSurnamePlaceholder:'Surname',
        inputAddressPlaceholder:'Address',
        question:'Question',
        correctResult: 'Correct!',
        wrongResult: 'Wrong!'
    },
});

export default appLocalization;
