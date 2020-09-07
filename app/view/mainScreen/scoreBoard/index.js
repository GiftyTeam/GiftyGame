import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {scoreBoardStyles} from './styles';
import appLocalization from '../../../localization/localization';
import {colors} from '../../../modules/utils/colors';
const ScoreBoard = () => {
  const data = [
    {date: '28.06.2020', score: 500},
    {date: '29.06.2020', score: 554},
    {date: '30.06.2020', score: 620},
    {date: '31.06.2020', score: 680},
    {date: '01.07.2020', score: 734},
  ];

  return (
    <View style={scoreBoardStyles.scoreView}>
      <View style={scoreBoardStyles.container}>
        <View style={scoreBoardStyles.scoreBoardHeaderAndBottom}>
          <View style={scoreBoardStyles.scoreBoardHeaderComponent}>
            <Text style={scoreBoardStyles.scoreBoardHeaderText}>
              {appLocalization.date}
            </Text>
          </View>

          <View style={scoreBoardStyles.Line} />

          <View style={scoreBoardStyles.scoreBoardHeaderComponent}>
            <Text style={scoreBoardStyles.scoreBoardHeaderText}>
              {appLocalization.score}
            </Text>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View
              style={[
                scoreBoardStyles.flatContainer,
                {
                  backgroundColor:
                    index % 2 == 0 ? colors.white : colors.gray81,
                },
              ]}>
              <View style={scoreBoardStyles.flatComponent}>
                <Text style={scoreBoardStyles.flatText}>{item.date}</Text>
              </View>

              <View style={scoreBoardStyles.Line} />

              <View style={scoreBoardStyles.flatComponent}>
                <Text style={scoreBoardStyles.flatText}>{item.score}</Text>
              </View>
            </View>
          )}
        />

        <View style={scoreBoardStyles.scoreBoardHeaderAndBottom}>
          <View style={scoreBoardStyles.botomContainer}>
            <Text style={scoreBoardStyles.bottomText}>
              {appLocalization.totalScore}
            </Text>
          </View>
          <View style={scoreBoardStyles.botomContainer}>
            <Text style={scoreBoardStyles.bottomText}>4669</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ScoreBoard;
