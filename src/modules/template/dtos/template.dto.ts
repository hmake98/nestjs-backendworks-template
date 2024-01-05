import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class TemplateDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  public template: string;
}
