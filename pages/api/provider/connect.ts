import type { NextApiRequest, NextApiResponse } from "next";
import { AuthorizationCode } from "simple-oauth2";
type Data = {
  name: string;
};

//fitibt
const client = new AuthorizationCode({
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
});
const callbackUrl = "http://localhost:3000/api/auth/fitbit/callback";
const authorizationUri = client.authorizeURL({
  redirect_uri: callbackUrl,
  scope: "activity",
  state: "3(#0/!~",
});
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.redirect(authorizationUri);
}
