import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'i am sign on service' };
  }
  signin() {
    return { msg: 'yes' };
  }
}
