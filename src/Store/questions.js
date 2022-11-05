import { createSlice, current  } from '@reduxjs/toolkit';

const initialState = {
        questions: null
    };

const questionsSlice = createSlice({
    name: 'questions',
    initialState: initialState,
    reducers: {
        getListQuestions(state, action) {
            state.questions = action.payload;
        },
        addAnswerToQuestion(state, action) {
            const { authUser, qsId, answer } = action.payload;
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [qsId]: {
                        ...state.questions[qsId],
                        [answer]: {
                            ...state.questions[qsId][answer],
                            votes: state.questions[qsId][answer].votes.concat(authUser)
                        }
                    }
                }

            }
        },
        saveNewQuestion(state, action) {
            const newQuestion = action.payload;
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [newQuestion.id]: newQuestion
                }
            }
        },
    }
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice.reducer;