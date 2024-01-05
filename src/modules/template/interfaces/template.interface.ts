import { TemplateDto } from '../dtos/template.dto';

export interface ITemplate {
  templateService(data: TemplateDto): void;
}
