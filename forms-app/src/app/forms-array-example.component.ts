import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-array-example',
  templateUrl: './forms-array-example.component.html',
  styleUrls: ['./forms-array-example.component.css'],
})
export class FormsArrayExampleComponent {
  constructor(private fb: FormBuilder) {}

  editForm = this.fb.group({
    companyName: ['', Validators.required],
    lessons: this.fb.array([]),
  });

  get lessons() {
    return this.editForm.controls['lessons'] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required],
    });

    this.lessons.push(lessonForm);
  }

  deleteLesson() {
    const sz = this.lessons.length;
    if (sz > 0) {
      this.lessons.removeAt(sz - 1);
    }
  }
}
