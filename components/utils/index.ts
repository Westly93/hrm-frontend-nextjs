import continueWithSocialAuth from './continue-with-social-auth';
export {default as Setup} from './Setup';
export {default as RequireAuth} from './RequireAuth';


export const continueWithGoogle= ()=> continueWithSocialAuth('google-oauth2', 'google')
export const continueWithFacebook= ()=> continueWithSocialAuth('facebook', 'facebook');