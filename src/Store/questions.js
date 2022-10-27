import { createSlice, current  } from '@reduxjs/toolkit';

const initialState = {
        questions: null
    };

const questionsSlice = createSlice({
    name: 'getQuestions',
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
        }
    }
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice.reducer;