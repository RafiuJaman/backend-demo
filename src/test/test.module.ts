import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './test.entity';
import { TestRepository } from './test.repository';
import { TestService } from './test.service';
import { TestsController } from './test.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'traactlocal',
      entities: [Poll],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Poll]),
  ],
  providers: [TestRepository, TestService],
  exports: [TestRepository, TestService],
  controllers: [TestsController],
})
export class TestModule {}
