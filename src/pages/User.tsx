import React, { FC } from "react";

import { UserInfo } from "../components/UserInfo";

export const User: FC = () => {

    return (
        <div>
            <h2>User Page</h2>
            <UserInfo />
        </div>
    );
};

export default User;
