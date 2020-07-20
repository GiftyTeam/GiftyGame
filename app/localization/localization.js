import LocalizedStrings from 'react-native-localization';

const appLocalization = new LocalizedStrings({
    'az': {
        appName: 'Gifty',
        nextButton: 'Irəli',
        question:'Sual',
        correctResult: 'Əla!',
        wrongResult: 'Səhv!'
    },
    'en': {
        appName: 'Gifty',
        nextButton: 'Next',
        question:'Question'
    },
});

export default appLocalization;
