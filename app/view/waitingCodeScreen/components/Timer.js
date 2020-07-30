import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

const Timer = () => {
  const [count, setCount] = useState(30);
  useEffect(() => {
    let timer = setInterval(() => {
      if (count > 0) {
        setCount((prevState) => prevState - 1);
      }
      if (count === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const timerSeconds = count < 10 ? `0${count}` : `${count}`;
  return (
    <>
      {count === 0 ? (
        <TouchableOpacity>
          <Text style={styles.text}>Kod gəlmədi?</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.text}>{`00 : ${timerSeconds}`}</Text>
      )}
    </>
  );
};

export default Timer;
