import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import DashedLine from '../dashedLine';
import appLocalization from '../../../../localization/localization';
import AppText from '../../../../components/appText';

const Header = ({totalQuestions, currentQuestion, totalPoints}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <AppText>
            <AppText style={styles.questionTextStyle}>
              {appLocalization.question}
            </AppText>
            <AppText style={styles.questionNoTextStyle} type={1}>
              {' ' + currentQuestion + '/' + totalQuestions}
            </AppText>
          </AppText>
        </View>
        <AppText style={styles.pointTextStyle}>{totalPoints}</AppText>
      </View>
      <DashedLine style={styles.dashStyle} />
    </View>
  );
};

export default Header;
