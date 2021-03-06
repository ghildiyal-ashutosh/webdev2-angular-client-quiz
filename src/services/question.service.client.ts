// const QUESTION_API_URL = 'http://localhost:3000/api';
const QUESTION_API_URL = 'https://webdev2-node-server-ashu95.herokuapp.com/api'

import {Injectable} from '@angular/core';


@Injectable()
export class QuestionServiceClient {

    findAllQuestions() {
        return fetch((QUESTION_API_URL + '/question'), {
            credentials : 'include'
        }).then(function(response) {
            return response.json();
        });
    }

    deleteQuestion (questionId) {
        return fetch ((QUESTION_API_URL + '/question/' + questionId), {
            method: 'DELETE',
            credentials : 'include'
        }).then((response) => response);
    }

}

