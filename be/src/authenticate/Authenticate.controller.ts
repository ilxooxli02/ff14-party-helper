import { Inject } from "@coralblack/cyan/dist/core";
import { Get, QueryParam } from "@coralblack/cyan/dist/router";
import { AuthenticateService } from "./Authenticate.service";
import { BaseController } from "../Base.controller";

export class AuthenticateController extends BaseController {
  constructor(@Inject() private readonly authenticateService: AuthenticateService) {
    super();
  }

  @Get("/user")
  async getUser(@QueryParam("code", { required: true, type: String }) code: string): Promise<any> {
    const res = await this.authenticateService.authorize(code);
  }
}
