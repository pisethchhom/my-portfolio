import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setName, setBio } from '../features/userSlice';

const Home: React.FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="p-4">
            <h2 className="text-xl">Welcome, {user.name}</h2>
            <p>{user.bio}</p>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="border p-2"
                    onChange={(e) => dispatch(setName(e.target.value))}
                />
                <input
                    type="text"
                    placeholder="Bio"
                    className="border p-2 ml-2"
                    onChange={(e) => dispatch(setBio(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Home;
