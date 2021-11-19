import { makeRequest } from "~utils/rest";
import { SourcesParams, SourcesResponse } from "./types";

class Sources {
  private secret = "";
  private path = "/sources";

  constructor(secret: string) {
    this.secret = secret;
  }

  create(data: SourcesParams) {
    return makeRequest<SourcesParams, SourcesResponse>(
      this.path,
      "POST",
      this.secret,
      data
    );
  }

  retrieve(id: string) {
    if (!id || id.length === 0)
      throw new ReferenceError("Sources id is required");
    return makeRequest<object, SourcesResponse>(
      `${this.path}/${id}`,
      "GET",
      this.secret,
      {}
    );
  }
}

export default Sources;
