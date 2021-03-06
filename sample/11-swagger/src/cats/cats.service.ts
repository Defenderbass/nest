import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsModule } from './cats.module';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findOne(id: number): Cat {
    return this.cats[id];
  }
}
