import React, {useState} from 'react';
import styles from './styles';
import {View} from 'react-native';

const DashedLine = ({style}) => {
  const [length, setLength] = useState(0);
  const dashLength = styles.dashStyle.width;
  const dashGapLength = 4;
  const noOfDashes = Math.ceil(length / (dashLength + dashGapLength));
  const dashes = [];
  for (var dashIndex = 0; dashIndex < noOfDashes; dashIndex++) {
    dashes.push(<View key={dashIndex} style={[styles.dashStyle, style]} />);
  }

  function onLayout(layoutEvent) {
    setLength(layoutEvent.layout.width);
  }

  return (
    <View
      onLayout={(event) => onLayout(event.nativeEvent)}
      style={styles.container}>
      {dashes}
    </View>
  );
};

export default DashedLine;
