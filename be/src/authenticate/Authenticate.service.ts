import { DiscordHelper } from "@helper/Discord.helper.";
import { Inject } from "@coralblack/cyan/dist/core";

export class AuthenticateService {
  constructor(@Inject() private readonly discordHelper: DiscordHelper) {}
  async authorize(code: string) {
    const accessToken = await this.discordHelper.getAccessToken(code);

    console.log(accessToken);
  }
}
