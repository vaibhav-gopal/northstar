import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    onError(req, error) {
        console.error(error);
    }
});

// The above adds the following routes:
// - /api/auth/login : used to perform login with Auth0
// - /api/auth/logout : used to logout from session
// - /api/auth/callback : route to redirect to after succesful login
// - /api/auth/me : obtain details about current user