import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFourComponent } from './question-four/question-four.component';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionTwoComponent } from './question-two/question-two.component';

const routes: Routes = [
  {
    path: 'question-one',
    component: QuestionOneComponent,
  },
  {
    path: 'question-two',
    component: QuestionTwoComponent,
  },
  {
    path: 'question-three',
    component: QuestionThreeComponent,
  },
  {
    path: 'question-four',
    component: QuestionFourComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'question-one',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
