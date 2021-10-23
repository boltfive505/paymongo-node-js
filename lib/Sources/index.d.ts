import { SourcesParams, SourcesResponse } from "./types";
declare class Sources {
    private secret;
    private path;
    constructor(secret: string);
    create(data: SourcesParams): Promise<SourcesResponse>;
    retrieve(id: string): Promise<SourcesResponse>;
}
export default Sources;
//# sourceMappingURL=index.d.ts.map