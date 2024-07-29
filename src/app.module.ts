import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SamAssistantModule } from './sam-assistant/sam-assistant.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SamAssistantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
