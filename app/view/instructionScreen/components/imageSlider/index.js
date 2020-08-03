import appLocalization from '../../../../localization/localization';
import {SLIDES} from '../../../../../__mocks__/imageSliderData';
import AppIntroSlider from 'react-native-app-intro-slider';
import {colors} from '../../../../modules/utils/colors';
import Button from '../../../../components/button';
import {Image, View} from 'react-native';
import {styles} from './styles';
import React from 'react';

const ImageSlider = () => {
    const _renderItem = ({item}) => {
        return (
            <View key={item.key}>
                <Image
                    source={{uri: item.image}}
                    style={styles.image}
                    resizeMode={'cover'}
                />
            </View>
        );
    };
    const _renderNextButton = () => {
        return (
            <View>
                <Button
                    name={appLocalization.nextButton}
                />
            </View>
        );
    };

    const _renderDoneButton = () => {
        return (
            <Button
                isDisabled={false}
                name={appLocalization.doneButton}
            />
        );
    };
    return (
        <AppIntroSlider
            renderNextButton={_renderNextButton}
            renderDoneButton={_renderDoneButton}
            renderItem={_renderItem}
            bottomButton={true}
            data={SLIDES}
        />
    );
};
export default ImageSlider;
