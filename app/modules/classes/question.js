import {detach} from 'redux-saga';

export default class Question {
  question;
  answerA;
  answerB;
  answerC;
  answerD;
  photoURL;
  answerIndex;

  constructor(details) {
    const {
      question,
      answerA,
      answerB,
      answerC,
      answerD,
      answerRight,
      imageURL,
    } = details;
    if (question) {
      this.question = question;
    }
    if (answerA) {
      this.answerA = answerA;
    }
    if (answerB) {
      this.answerB = answerB;
    }
    if (answerC) {
      this.answerC = answerC;
    }
    if (answerD) {
      this.answerD = answerD;
    }
    if (imageURL) {
      this.photoURL = imageURL;
    }
    if (answerRight) {
      switch (answerRight) {
        case answerA: {
          this.answerIndex = 1;
        }
        case answerB: {
          this.answerIndex = 2;
        }
        case answerC: {
          this.answerIndex = 3;
        }
        case answerD: {
          this.answerIndex = 4;
        }
      }
    }
  }
}
