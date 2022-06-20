import { AuthGuard } from "@nestjs/passport";

// will use LocalStrategy
export class LocalAuthGuard extends AuthGuard('local'){

}