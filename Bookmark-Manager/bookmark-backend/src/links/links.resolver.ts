import { Args, Query, Resolver } from '@nestjs/graphql';

import { Link } from './link.model';
import { LinksService } from './links.service';

@Resolver(() => Link)
export class LinksResolver {
    constructor(private readonly linksService: LinksService) { }

    @Query(() => [Link], {name: 'links'}) // will return an array of links, name is links
    async getLinks(@Args() getLinksArgs){

    }

}
