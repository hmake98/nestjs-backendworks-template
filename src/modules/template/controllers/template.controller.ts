import { Controller } from '@nestjs/common';

@Controller({
  version: '1',
  path: '/template',
})
export class TemplateController {
  constructor() {
    //
  }
}
