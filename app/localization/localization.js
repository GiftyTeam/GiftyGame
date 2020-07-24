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
    },
    'en': {
        appName: 'Gifty',
        nextButton: 'Next',
        doneButton:'Done',
        pickerTitle:'City',
        inputNamePlaceholder:'Name',
        inputSurnamePlaceholder:'Surname',
        inputAddressPlaceholder:'Address',
    },
});

export default appLocalization;
