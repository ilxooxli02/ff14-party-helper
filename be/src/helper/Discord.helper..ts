import { URLSearchParams } from "url";
import axios from "axios";

const CLIENT_ID = "878887191353384991";
const CLIENT_SECRET = "w8fYLDmpo3VbxeXKDx6feqqgdKTAtam7";

export type DiscordAuthToken = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
};

export class DiscordHelper {
  async getAccessToken(code: string): Promise<DiscordAuthToken> {
    try {
      const params = new URLSearchParams();

      params.append("client_id", CLIENT_ID);
      params.append("client_secret", CLIENT_SECRET);
      params.append("grant_type", "authorization_code");
      params.append("code", code);
      params.append("redirect_uri", "http://localhost:55000/auth/sign-in");
      params.append("scope", "identify");

      const resp = await axios.post("https://discord.com/api/oauth2/token", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      return resp.data as DiscordAuthToken;
    } catch (error) {
      console.log(error);
    }
  }
}
