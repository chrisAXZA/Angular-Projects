import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

// override getRequest of jwtAuthGuard to return gql context
export class GqlAuthGuard extends AuthGuard('jwt'){
    getRequest(context: ExecutionContext){
        const ctx = GqlExecutionContext.create(context);

        return ctx.getContext().req;
    }
};