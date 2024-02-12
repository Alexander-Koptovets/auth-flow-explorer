import React from "react";

export const UserInfo: React.FC = () => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");

    const user = isAuthenticated
        ? { name: 'John', email: 'john@email.com' }
        : null;

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h3>User Info</h3>
                    <p>Name: {user?.name}</p>
                    <p>Email: {user?.email}</p>
                </div>
            ) : (
                <p>Please log in to view user info.</p>
            )}
        </div>
    );
};
