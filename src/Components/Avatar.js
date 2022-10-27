import { Fragment } from 'react';

const Avatar = (props) => {
    const { user } = props;

    const onSelectAvatar= (e) => {
        props.onSelectAvatar(e.target.value);
      }

    return <Fragment>
        <div className="col-4 user-avatar pb-4">
            <label htmlFor={user.id}>
                <img src={user.avatarURL} />
            </label>
            <span className="user-name d-block mt-2">{user.name}</span>
            <input type="radio" name="cbUser" id={user.id} value={user.id} onChange={onSelectAvatar}/>
        </div>
    </Fragment>
}

export default Avatar;