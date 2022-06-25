import { Injectable } from '@nestjs/common';
import { getLinkPreview } from 'link-preview-js';

import { GetLinksArgs } from './dto/args/get-links-args.dto';

@Injectable()
export class LinksService {
    // will iterate over links array and provide a link-preview for each one
    async getLinks(getLinksArgs: GetLinksArgs) {
        // will use Promise.All in order to execute all tasks (each url) in parallel (fetching links previews)
        return Promise.all(
            getLinksArgs.urls.map(async (url) => {
                return getLinkPreview(url);
            }),
        );
    }
}
