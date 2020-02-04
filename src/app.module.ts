import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaModule } from './receta/receta.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RecetaModule,
    MongooseModule.forRoot('mongodb://51.77.146.230:27020/recetasV3')],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
