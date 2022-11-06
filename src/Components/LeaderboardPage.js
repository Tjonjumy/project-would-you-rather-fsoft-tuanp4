import { Fragment } from 'react';

import { useSelector } from 'react-redux';

import LeaderboardComp from './LeaderboardComp';

const Leaderboard = () => {
    // get list Users
    const users = useSelector(state => state.user.users);

    // set total and sort rank position
    const leaderboardData = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);

    const lstLeaderboard = leaderboardData.map(((leaderboard, idx) => {
       return <LeaderboardComp leaderboard={leaderboard} key={leaderboard.id} rank={idx} />
    }))

    return <Fragment>
        {lstLeaderboard}
    </Fragment>
}

export default Leaderboard;