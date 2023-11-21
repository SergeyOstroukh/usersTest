import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signup() {
    return this.authService.signup();
  }

  @Post('signIn')
  signin() {
    return this.authService.signin();
  }
}
