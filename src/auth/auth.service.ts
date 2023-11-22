import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {
  }
  signup() {
    return { msg: 'i am sign on service' };
  }
  signin() {
    return { msg: 'yes' };
  }
}

