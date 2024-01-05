import { Injectable } from '@nestjs/common';
import { ITemplate } from '../interfaces/template.interface';
import { TemplateDto } from '../dtos/template.dto';

@Injectable()
export class TemplateService implements ITemplate {
  constructor() {
    //
  }

  templateService(_data: TemplateDto): void {
    //
  }
}
