import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    this.questions = [
      {
        text: 'Meaning of life?',
        answer: '42',
        hide: true
      },
      {
        text: 'Favorite Language?',
        answer: 'JavaScript',
        hide: true
      },
      {
        text: 'Front End or Back End?',
        answer: 'Front End',
        hide: true
      }
    ]
  }

  getQuestions() {
    return this.questions;
  }

}
