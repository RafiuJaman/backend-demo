import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiTags } from '@nestjs/swagger';
import { ClaimForm } from './interface';
import { FormService } from './forms.service';
import { Form } from './forms.entity';

@Controller('test')
@ApiTags('test')
export class TestsController {
  constructor(private formService: FormService) {}

  // @Get('claims')
  // testForInterview(): Promise<string> {
  //   return this.testService.getClaims();
  // }

  // @Post()
  // postHello(): Promise<string> {
  //   return this.testService.postHello();
  // }

  @Post('addForm')
  async addForm(@Body() claimForm: ClaimForm): Promise<Form> {
    return this.formService.addForm(claimForm); // Passing the body to the service
  }

  @Get('getForms')
  async getForms(): Promise<Form[]> {
    return this.formService.getForms();
  }

  @Patch('updateForm/:id/:status') // Use ':id' and ':status' as route parameters
  async updateFormStatus(
    @Param('id') id: string, // Get 'id' as a string initially
    @Param('status') status: string, // Get 'status' as a string
  ): Promise<Form> {
    return this.formService.updateFormStatus(parseInt(id), status); // Parse 'id' to an integer
  }
}
