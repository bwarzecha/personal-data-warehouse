import { AuthorizationCode } from "simple-oauth2";
import fitbit from "simple-icons/icons/fitbit";
import google from "simple-icons/icons/google";
import todoist from "simple-icons/icons/todoist";

export const providers = {
  fitbit: {
    icon: fitbit,
    name: "Fitbit",
    client: new AuthorizationCode({
      client: {
        id: "22BQHM",
        secret: "17664c2cce3376239f7f967df4ef44a3",
      },
      auth: {
        tokenHost: "https://api.fitbit.com/",
        tokenPath: "oauth2/token",
        revokePath: "oauth2/revoke",
        authorizeHost: "https://api.fitbit.com/",
        authorizePath: "oauth2/authorize",
      },
      options: {
        authorizationMethod: "header",
      },
    }),
    callbackUrl: "http://localhost:3000/api/auth/fitbit/callback",
    scope: "activity",
  },
  google: {
    name: "Google",
    icon: google,
    client: new AuthorizationCode({
      client: {
        id: "846781194255-pb1phmmeq0p2r90rmmghjai76nrevksm.apps.googleusercontent.com",
        secret: "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",
      },
      auth: {
        authorizeHost: "https://accounts.google.com",
        authorizePath: "/o/oauth2/v2/auth",
        tokenHost: "https://www.googleapis.com",
        tokenPath: "/oauth2/v4/token",
      },
      options: {
        authorizationMethod: "header",
      },
    }),
    callbackUrl: "http://localhost:3000/api/auth/google/callback",
    scope: "https://mail.google.com/",
  },
  todoist: {
    icon: todoist,
    name: "Todoist",
    client: new AuthorizationCode({
      client: {
        id: "4a0fae464ea044e6a734d214fafc307a",
        secret: "16e2232e0481459f8c4994decf2598c9",
      },
      auth: {
        authorizeHost: "https://todoist.com",
        authorizePath: "oauth/authorize",
        tokenHost: "https://todoist.com",
        tokenPath: "/oauth/access_token",
      },
      options: {
        authorizationMethod: "body",
      },
    }),
    callbackUrl: "http://localhost:3000/api/auth/fitbit/callback",
    scope: "data:read",
  },
};
