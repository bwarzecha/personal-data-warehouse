import type { NextApiRequest, NextApiResponse } from "next";
import { providers } from "lib/providers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { provider } = req.query;
  if (!provider || provider.length !== 2) {
    res.status(404);
  }
  const [name, method] = provider;
  const providerConfig = providers[<"fitbit" | "google">name];

  if (method === "connect")
    return res.redirect(
      providerConfig.client.authorizeURL({
        redirect_uri: providerConfig.callbackUrl,
        scope: providerConfig.scope,
        state: "3(#0/!~",
      })
    );
  if (method === "callback") {
    try {
      const { code } = req.query;
      const accessToken = await providerConfig.client.getToken({
        redirect_uri: providerConfig.callbackUrl,
        code: <string>code,
      });
      console.log("Access", accessToken);
      res.status(200).json(accessToken);
    } catch (error) {
      console.log("Access Token Error", error);
      res.status(500).send("Failed");
    }
  }
}
