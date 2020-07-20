import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import DashedLine from '../dashedLine';
import appLocalization from '../../../../localization/localization';

const Header = ({totalQuestions, currentQuestion, totalPoints}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>
            <Text style={styles.questionTextStyle}>
              {appLocalization.question}
            </Text>
            <Text style={styles.questionNoTextStyle}>
              {' ' + currentQuestion + '/' + totalQuestions}
            </Text>
          </Text>
        </View>
        <View>
          <Text>
            <Text style={styles.pointTextStyle}>{totalPoints}</Text>
          </Text>
        </View>
      </View>
      <DashedLine style={styles.dashStyle} />
    </View>
  );
};

export default Header;
