import { Cyan } from "@coralblack/cyan/dist/core";
import { HttpRequest, HttpResponse, JsonController } from "@coralblack/cyan/dist/http";
import { HttpError } from "@coralblack/cyan/dist/http/Http.error";
import { CyanRequest } from "@coralblack/cyan/dist/types/Handler";
import { hasOwnProperty } from "@helper/Misc.function";

export class BaseController extends JsonController {
  // eslint-disable-next-line @typescript-eslint/require-await
  async onHttpError(request: HttpRequest, error: HttpError): Promise<HttpError> {
    return super.onHttpError(request, error);
  }

  async onError(error: Error, req: CyanRequest, cyan: Cyan): Promise<HttpResponse> {
    const resp = await super.onError(error, req, cyan);

    resp.content = {
      result: false,
      code: error.name || undefined,
      message: hasOwnProperty(error, "sqlMessage") ? "An error has occurred. (DB Error)" : error.message,
    };

    return resp;
  }
}
