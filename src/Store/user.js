import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        users: null
    };

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        getListUsers(state, action) {
            state.users = action.payload;
        },
        addAnswerToUser(state, action) {
            const { idUser, qsId, answer } = action.payload;
            return {
                ...state,
                users: {
                    ...state.users,
                    [idUser]:{
                        ...state.users[idUser],
                        answers: {
                            ...state.users[idUser].answers,
                            [qsId]: answer
                        }
                    }
                }
            }
        },
        addQuestionToUser(state, action) {
            const newQuestion = action.payload;
            const authedUser = newQuestion.author;
            return {
                ...state,
                users: {
                    ...state.users,
                    [authedUser]: {
                        ...state.users[authedUser],
                        questions: state.users[authedUser].questions.concat([newQuestion.id])
                    }
                }
            }
        },
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;